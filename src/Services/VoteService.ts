import { auth, db, signInAnonymously } from './firebaseConfig';
import { doc, getDoc, increment, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ImageData } from "../Components/Voting/ImageData";

export class VotingService {
    static async getVotes(imageId: number): Promise<number> {
        await this.ensureAuth();

        const docRef = doc(db, 'votes', imageId.toString());
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            await setDoc(docRef, {
                count: 0,
                createdAt: new Date().toISOString()
            });
            return 0;
        }

        return (docSnap.data()?.count as number) || 0;
    }

    static async addVote(imageId: number, userId: string): Promise<void> {
        await this.ensureAuth();
        const voteRef = doc(db, 'votes', imageId.toString());
        const userRef = doc(db, 'users', userId);

        try {
            await updateDoc(voteRef, {
                count: increment(1)
            });
            
            await setDoc(userRef, {
                votedImageId: imageId,
                votedAt: new Date().toISOString()
            });
            
        } catch (error: any) {
            if (error.code === 'not-found') {
                await setDoc(voteRef, {
                    count: 1,
                    createdAt: new Date().toISOString()
                });
            } else {
                throw new Error(`Szavazási hiba: ${error.message}`);
            }
        }
    }

    static async deleteVote(imageId: number, userId: string): Promise<void> {
        await this.ensureAuth();
        const voteRef = doc(db, 'votes', imageId.toString());
        const userRef = doc(db, 'users', userId);

        try {
            await updateDoc(voteRef, {
                count: increment(-1)
            });
            
            await deleteDoc(userRef);
            
        } catch (error) {
            throw new Error(`Törlési hiba: ${error}`);
        }
    }

    static async getAllVotes(images: ImageData[]): Promise<Record<number, number>> {
        const votes: Record<number, number> = {};
        await Promise.all(
            images.map(async (image) => {
                votes[image.id] = await this.getVotes(image.id);
            })
        );
        return votes;
    }

    private static async ensureAuth(): Promise<void> {
        if (!auth.currentUser) {
            await signInAnonymously(auth);
        }
    }
}