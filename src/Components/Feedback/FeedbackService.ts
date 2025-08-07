import emailjs from 'emailjs-com';
import { Child } from './Feedback';

export class FeedbackService {
    public static initJs() {
        emailjs.init('ZCVVbW_74u-qXVJRl');
    }

    public static sendFeedback(name: string, partnerName: string, children: Child[]) {
        const partner = partnerName ? partnerName : "-";
        let childrenInfo = "";
        for (const child of children) {
            const childData = `Név: ${child.name}, Kor: ${child.age}\n`;
            childrenInfo += childData;
        }

        const emailContent = `
        Visszajelző neve: ${name}
        Visszajelző párja: ${partner}
        Gyerekek:\n ${childrenInfo}
      `;

        return emailjs.send('service_3j1l9ki', 'template_2w8lh99', {
            message: emailContent
        });
    }
}
