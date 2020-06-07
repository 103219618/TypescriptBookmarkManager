export class Bookmark
{

    Title: string;
    URL: string;
    icon: string;
    favourite: boolean = false;

    constructor (webtitle: string, ficon: string){
        this.Title = webtitle;
        this.URL = "";
        this.icon = "";
        let favIcon = ficon;

    
    }

    setURL(id: string){
        id = this.URL
        
        }
        
    getURL(){
        if (this.URL == null) {
            return "";
        }
        return this.URL
        }
}
