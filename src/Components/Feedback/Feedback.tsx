import React from "react";

export interface Child {
    name: string;
    age:string;
}

interface IState {
    name: string;
    partnerName: string;
    children: Child[];
}

export class Feedback extends React.Component<{}, IState> {
    public constructor(props: {}){
        super(props);

        this.state = {
            name: "",
            partnerName: "",
            children: []
        }
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Név: </label>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                    required
                />
            </div>

            <div>
                <label>Pár neve (opcionális): </label>
                <input
                    type="text"
                    value={this.state.partnerName}
                    onChange={(e) => this.setState({partnerName: e.target.value})}
                />
            </div>

            <div>
                <label>Gyerekek: </label>
                {this.state.children.map((child, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            placeholder="Gyerek neve"
                            value={child.name}
                            onChange={(e) => this.handleChildNameChange(index, e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Gyerek kora"
                            value={child.age}
                            onChange={(e) => this.handleChildAgeChange(index, e.target.value)}
                            required
                        />
                        <button type="button" onClick={() => this.removeChild(index)}>
                            Eltávolítás
                        </button>
                    </div>
                ))}
            </div>

            <button type="button" onClick={this.addChild}>
                + Gyerek hozzáadása
            </button>

            <div>
                <button type="submit">Küldés</button>
            </div>
        </form>
        )
    }

        // Gyerek hozzáadása
        private addChild = () => {
            var tempChildren = [...this.state.children];
            tempChildren.push({name: "", age: ""});

            this.setState({
                children: tempChildren
            });
        };
    
        // Gyerek adatainak kezelése
        private handleChildNameChange = (index: number, value: string) => {
            var newChildren: Child[] = [...this.state.children];
            newChildren[index].name = value;
            
            this.setState({
                children: newChildren
            });
        };

        private handleChildAgeChange = (index: number, value: string) => {
            var newChildren: Child[] = [...this.state.children];
            newChildren[index].age= value;

            this.setState({
                children: newChildren
            });
        };
    
        // Gyerek eltávolítása
        private removeChild = (index: number) => {
            const newChildren = this.state.children.filter((_, i) => i !== index);
            this.setState({
                children: newChildren
            });
        };
    
        // Form küldése
        private handleSubmit = (event: any) => {
            event.preventDefault();
            // Form adatok feldolgozása (pl. küldés szerverre)
            console.log(
                this.state.name + " "+
                this.state.partnerName +" " +
                this.state.children.length
            );
        };
}