import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecetteInterface } from '../interfaces/recette-interface';
@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  constructor(private _http:HttpClient) { }

  getRecettes(){
   return this._http.get('http://localhost:3000/recette');
      // {id:1, 
      //   nom:"Coquillettes au beurre", 
      //   description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl quam, pulvinar at mi ac, consectetur accumsan sapien. Ut lacinia condimentum molestie. Nulla elementum vestibulum varius. Mauris risus ligula, maximus quis leo et, egestas pellentesque est. In at massa et elit egestas tempor eget id leo. Nunc ac purus nec augue ullamcorper vulputate eget vitae odio. Aenean porta erat at tortor tempus dignissim. Etiam egestas nisi a vulputate sodales. Pellentesque laoreet dignissim ipsum, nec rutrum magna iaculis et. Aenean faucibus, ex non dictum imperdiet, odio est dignissim arcu, ac ultrices justo justo ac leo. In libero neque, viverra at libero fringilla, tristique luctus urna.", 
      //   photo:"https://assets.afcdn.com/recipe/20171120/75364_w640h486c1cx3000cy2000cxb6000cyb4000.webp", 
      //   temps_preparation:10, 
      //   temps_cuisson: 10, 
      //   date:"25-04-2023", 
      //   ingredients:[
      //     {
      //       nom: "Saumon frais",
      //       photo: "https://t1.uc.ltmcdn.com/fr/posts/0/9/1/comment_cuisiner_le_saumon_frais_2190_orig.jpg",
      //       allergene: false,
      //       dosage: "60g"
            
      //     },
      //     {
      //       nom: "Saumon frais",
      //       photo: "https://t1.uc.ltmcdn.com/fr/posts/0/9/1/comment_cuisiner_le_saumon_frais_2190_orig.jpg",
      //       allergene: false,
      //       dosage: "60g"
      //     },
      //   ],
      //   etapes:[
      //     {
      //       numero_ordre:1, 
      //       instructions:"blablablbalbalba"
      //     },
      //     {
      //       numero_ordre:2, 
      //       instructions:"La pigne"
      //     },
      //   ],
      // },
      // {
      //   id:2,
      //   nom:"Pâtes à la carbonara",
      //   description:"Des pâtes à la carbonara traditionnelles et crémeuses",
      //   photo:"https://assets.afcdn.com/recipe/20181017/82788_w1024h1024c1cx1894cy2526.jpg",
      //   temps_preparation:15,
      //   temps_cuisson:10,
      //   date:"26-04-2023",
      //   ingredients:[
      //     {
      //     nom:"Spaghetti",
      //     photo:"https://cdn.shopify.com/s/files/1/0390/8269/products/spaghetti_n.png?v=1600891736",
      //     allergene:false,
      //     dosage:"200g"
      //     },
      //     {
      //     nom: "Pancetta",
      //     photo: "https://cdnimg.webstaurantstore.com/images/products/large/507943/1721478.jpg",
      //     allergene: true,
      //     dosage: "100g"
      //     },
      //     {
      //     nom: "Parmesan",
      //     photo: "https://i0.wp.com/www.foodrepublic.com/wp-content/uploads/2013/04/parmesan.jpg?fit=1500%2C1000&ssl=1",
      //     allergene: true,
      //     dosage: "50g"
      //     },
      //     {
      //     nom: "Œufs",
      //     photo: "https://www.oncuisinealafolie.com/wp-content/uploads/2017/03/OEufs.jpg",
      //     allergene: false,
      //     dosage: "2"
      //     },
      //     {
      //     nom: "Ail",
      //     photo: "https://cdn.britannica.com/20/143020-050-526314CA/garlic-cloves-bulb-garnish.jpg",
      //     allergene: true,
      //     dosage: "2 gousses"
      //     },
      //     {
      //     nom: "Poivre noir",
      //     photo: "https://www.mccormick.com/sites/default/files/2021-05/black-pepper-465x465.jpg",
      //     allergene: false,
      //     dosage: "q.s."
      //     },
      //   ],
      //   etapes:[
      //     {
      //     numero_ordre:1,
      //     instructions:"Faire cuire les pâtes dans de l'eau bouillante salée selon les instructions sur l'emballage."
      //     },
      //     {
      //     numero_ordre:2,
      //     instructions:"Dans une poêle, faire revenir la pancetta coupée en petits dés avec l'ail émincé."
      //     },
      //     {
      //     numero_ordre:3,
      //     instructions:"Dans un bol, fouetter les œufs avec le parmesan râpé et le poivre noir."
      //     },
      //     {
      //     numero_ordre:4,
      //     instructions:"Une fois les pâtes cuites, les égoutter et les remettre dans la casserole hors du feu."
      //     },
      //     {
      //     numero_ordre:5,
      //     instructions:"Ajouter le mélange d'œufs et de parmesan aux pâtes et bien mélanger."
      //     },
      //     {
      //     numero_ordre:6,
      //     instructions:"Ajouter la pancetta et l'ail aux pâtes et mélanger à nouveau."
      //     },
      //     {
      //     numero_ordre:7,
      //     instructions:"Servir chaud, garni de parmesan râpé et de poivre noir."
      //     },
      //   ],
      //   },
      //   {
      //     id:3,
      //     nom:"Smoothie banane-kiwi",
      //     description:"Un smoothie frais et vitaminé à base de banane et de kiwi",
      //     photo:"https://assets.afcdn.com/recipe/20131009/4480_w640h486c1cx1728cy2214.webp",
      //     temps_preparation:10,
      //     temps_cuisson:0,
      //     date:"27-04-2023",
      //     ingredients:[
      //       {
      //       nom:"Banane",
      //       photo:"https://www.frutapura.es/wp-content/uploads/2017/12/platano-4-400x400.png",
      //       allergene:false,
      //       dosage:"1"
      //       },
      //       {
      //       nom:"Kiwi",
      //       photo:"https://images-na.ssl-images-amazon.com/images/I/71-EkX9ud5L.SX425.jpg",
      //       allergene:false,
      //       dosage:"2"
      //       },
      //       {
      //       nom:"Jus d'orange",
      //       photo:"https://www.histoiredego.com/wp-content/uploads/2018/04/jus-dorange-fait-maison-e1523768415778.jpg",
      //       allergene:false,
      //       dosage:"200 ml"
      //       },
      //       {
      //       nom:"Miel",
      //       photo:"https://cdn.pixabay.com/photo/2016/11/29/03/25/honey-1867206_960_720.jpg",
      //       allergene:false,
      //       dosage:"1 c. à soupe"
      //       },
      //     ],
      //     etapes:[
      //       {
      //       numero_ordre:1,
      //       instructions:"Coupez la banane en morceaux et épluchez les kiwis."
      //       },
      //       {
      //       numero_ordre:2,
      //       instructions:"Dans un blender, mixez la banane, les kiwis, le jus d'orange et le miel jusqu'à obtenir une texture lisse et homogène."
      //       },
      //       {
      //       numero_ordre:3,
      //       instructions:"Versez le smoothie dans un verre et servez immédiatement."
      //       },
      //     ],
      //   },
      //   {
      //     id:4,
      //     nom:"Smoothie banane-kiwi",
      //     description:"Un smoothie frais et vitaminé à base de banane et de kiwi",
      //     photo:"https://assets.afcdn.com/recipe/20131009/4480_w640h486c1cx1728cy2214.webp",
      //     temps_preparation:10,
      //     temps_cuisson:0,
      //     date:"27-04-2023",
      //     ingredients:[
      //       {
      //       nom:"Banane",
      //       photo:"https://www.frutapura.es/wp-content/uploads/2017/12/platano-4-400x400.png",
      //       allergene:false,
      //       dosage:"1"
      //       },
      //       {
      //       nom:"Kiwi",
      //       photo:"https://images-na.ssl-images-amazon.com/images/I/71-EkX9ud5L.SX425.jpg",
      //       allergene:false,
      //       dosage:"2"
      //       },
      //       {
      //       nom:"Jus d'orange",
      //       photo:"https://www.histoiredego.com/wp-content/uploads/2018/04/jus-dorange-fait-maison-e1523768415778.jpg",
      //       allergene:false,
      //       dosage:"200 ml"
      //       },
      //       {
      //       nom:"Miel",
      //       photo:"https://cdn.pixabay.com/photo/2016/11/29/03/25/honey-1867206_960_720.jpg",
      //       allergene:false,
      //       dosage:"1 c. à soupe"
      //       },
      //     ],
      //     etapes:[
      //       {
      //       numero_ordre:1,
      //       instructions:"Coupez la banane en morceaux et épluchez les kiwis."
      //       },
      //       {
      //       numero_ordre:2,
      //       instructions:"Dans un blender, mixez la banane, les kiwis, le jus d'orange et le miel jusqu'à obtenir une texture lisse et homogène."
      //       },
      //       {
      //       numero_ordre:3,
      //       instructions:"Versez le smoothie dans un verre et servez immédiatement."
      //       },
      //     ],
      //   }
  }


  postRecette(data:any){;
    return this._http.post('',data);
  }
}
