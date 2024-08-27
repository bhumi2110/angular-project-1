//let Name: string="bhumi";
export default class Stock {
    private code:number;
    protected company:string;
    public rate:number;
    constructor(c:number,cm:string,r:number){
        this.code=c;
        this.company=cm;
        this.rate=r;
    }
    display() {
        console.log(`code:${this.code} comapny:${this.company} rate:${this.rate}`);
    }
}
const c=new Stock(1,'bhumi',20);
//c.code=100;
//console.log(c.code);
c.display();