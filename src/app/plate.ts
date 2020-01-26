export class Plate {
    private _name: string;
    private _price: number;
    private _tax: number;
    private _icon:string;

    constructor(name: string, price: number, tax: number, icon:string) {
        this._name = name;
        this._price = price;
        this._tax = tax;
        this._icon = icon;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {     
        this._name = name;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {     
        this._price = price;
    }

    public get tax(): number {
        return this._tax;
    }

    public set tax(tax: number) {     
        this._tax = tax;
    }
    
    public get icon(): string {
        return this._icon;
    }

    public set icon(icon: string) {     
        this._icon = icon;
    }
  }