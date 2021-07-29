import React from "react";
//import axios from "axios";
import "./styles/loading.scss";
import "./styles/cartPage.scss";
import './styles/popupPage.scss';
import Loader from './Loader';
import Popup from './popupPage';
import amd1 from './images/amd-processor/amd-1.jpg';
import amd2 from './images/amd-processor/amd-2.jpg';
import amd3 from './images/amd-processor/amd-3.jpg';
import zeb1 from './images/zebronics/zeb-1.png';
import zeb2 from './images/zebronics/zeb-2.jpg';
import zeb3 from './images/zebronics/zeb-3.jpg';
import hp1 from './images/HPPavilion/hp-1.jpg';
import hp2 from './images/HPPavilion/hp-2.jpg';
import hp3 from './images/HPPavilion/hp-3.jpg';
import sony1 from './images/SonyPS/sony1.jpg';
import sony2 from './images/SonyPS/sony2.jpg';
//import sony3 from './images/SonyPS/sony-3.jpg';
// const Apidata= [{"id":1,"title":"amd Ryzen 9 3900XT 3.8 GHz Upto 4.7 GHz AM4 Socket 12 Cores 24 Threads Desktop Processor  (Silver)","description":"From content creation to gaming, the AMD Ryzen 9 3900XT desktop processor is designed to support your hustle. With Max Boost clock speed of up to 4.7 GHz and 70 MB of cache memory, it offers efficient and powerful performance. Its AMD Ryzen Ready Socket AM4 computing platform is compatible with both AMD X570 and B550 chipsets to ensure convenient and powerful usage.","price":45889.0,"originalPrice":55990.0,"quantity":15,"discountPercent":18,"createdDate":"2021-05-24T05:06:56","productImage":[{"id":1,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/amd-ryzen-9-3900xt-original-imafyy4c94krgbxm.jpeg"},{"id":2,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/amd-ryzen-9-3900xt-original-imafyy4cuhupvurs.jpeg"},{"id":3,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/amd-ryzen-9-3900xt-original-imafyy4cye6zsbfh.jpeg"}],"rating":6,"expressDelivery":true},{"id":2,"title":"ZEBRONICS ZEB-TRANSFORMER-M Wired Optical Gaming Mouse (USB 3.0, Black)","description":"Zeb-Transformer-M is a premium gaming mouse that comes with 6 buttons. It has a high precision optical sensor with a dedicated DPI switch that can toggle between 1000/1600/ 2400/ 3200 DPI. The mouse has 7 breathable LED modes, a sturdy 1.8-meter braided cable, and comes with a high-quality USB connector.","price":444.0,"originalPrice":549.0,"quantity":7,"discountPercent":19,"createdDate":"2021-05-24T05:09:30","productImage":[{"id":4,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/zeb-transformer-m-zebronics-original-imafxrugfftphbkk.jpeg"},{"id":5,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/zeb-transformer-m-zebronics-original-imafxrugh8yqdryh.jpeg"},{"id":6,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/zeb-transformer-m-zebronics-original-imafxrugue4nkmrb.jpeg"}],"rating":4,"expressDelivery":true},{"id":3,"title":"HP Pavilion Gaming Ryzen 5 Quad Core 3550H - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650)","description":"If you’re looking for a sleek yet powerful laptop that is perfect for, both, work and play, then you must buy the HP Pavilion Gaming 15 Laptop. Whether it's playing games or multitasking between applications, this laptop offers a smooth and lag-free performance as it features an AMD Ryzen 5-3550H processor and 8 GB of DDR4 RAM. Enjoy an immersive viewing experience, thanks to the 39.62-cm (15.6) Full HD display and dual speakers as well as B&O Audio.","price":49990.0,"originalPrice":56144.0,"quantity":11,"discountPercent":10,"createdDate":"2021-05-24T05:16:18","productImage":[{"id":7,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/hp-na-gaming-laptop-original-imaftpes7f3xwaus.jpeg"},{"id":8,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/hp-na-gaming-laptop-original-imaftpesacqphdch.jpeg"},{"id":9,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/hp-na-gaming-laptop-original-imaftpesbvfxgw9t.jpeg"}],"rating":3,"expressDelivery":false},{"id":4,"title":"Sony PS5 DualSense Wireless Controller  (White, For PS5)","description":"DualSense, Wireless Controller, Instruction Manual, Bluetooth compatible with all devices","price":5990.0,"originalPrice":5990.0,"quantity":4,"discountPercent":0,"createdDate":"2021-05-24T05:23:46","productImage":[{"id":10,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/sony-dualsense-original-imafz66q8kv9nchz.jpeg"},{"id":11,"imageUrl":"https://s3.ap-south-1.amazonaws.com/mycsyam.image/sony-dualsense-original-imafz66qyhe75rxm.jpeg"}],"rating":3,"expressDelivery":false}]
const Apidata=[
  {
    "id": 1,
    "title": "amd Ryzen 9 3900XT 3.8 GHz Upto 4.7 GHz AM4 Socket 12 Cores 24 Threads Desktop Processor  (Silver)",
    "description": "From content creation to gaming, the AMD Ryzen 9 3900XT desktop processor is designed to support your hustle. With Max Boost clock speed of up to 4.7 GHz and 70 MB of cache memory, it offers efficient and powerful performance. Its AMD Ryzen Ready Socket AM4 computing platform is compatible with both AMD X570 and B550 chipsets to ensure convenient and powerful usage.",
    "price": 45889,
    "originalPrice": 55990,
    "quantity": 15,
    "discountPercent": 18,
    "createdDate": "2021-05-24T05:06:56",
    "productImage": [
      {
        "id": 1,
        "imageUrl": amd3
      },
      {
        "id": 2,
        "imageUrl": amd2
      },
      {
        "id": 3,
        "imageUrl": amd1
      }
    ],
    "rating": 6,
    "expressDelivery": true
  },
  {
    "id": 2,
    "title": "ZEBRONICS ZEB-TRANSFORMER-M Wired Optical Gaming Mouse (USB 3.0, Black)",
    "description": "Zeb-Transformer-M is a premium gaming mouse that comes with 6 buttons. It has a high precision optical sensor with a dedicated DPI switch that can toggle between 1000/1600/ 2400/ 3200 DPI. The mouse has 7 breathable LED modes, a sturdy 1.8-meter braided cable, and comes with a high-quality USB connector.",
    "price": 444,
    "originalPrice": 549,
    "quantity": 7,
    "discountPercent": 19,
    "createdDate": "2021-05-24T05:09:30",
    "productImage": [
      {
        "id": 4,
        "imageUrl": zeb2
      },
      {
        "id": 5,
        "imageUrl": zeb3
      },
      {
        "id": 6,
        "imageUrl": zeb1
      }
    ],
    "rating": 4,
    "expressDelivery": true
  },
  {
    "id": 3,
    "title": "HP Pavilion Gaming Ryzen 5 Quad Core 3550H - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650)",
    "description": "If you’re looking for a sleek yet powerful laptop that is perfect for, both, work and play, then you must buy the HP Pavilion Gaming 15 Laptop. Whether it's playing games or multitasking between applications, this laptop offers a smooth and lag-free performance as it features an AMD Ryzen 5-3550H processor and 8 GB of DDR4 RAM. Enjoy an immersive viewing experience, thanks to the 39.62-cm (15.6) Full HD display and dual speakers as well as B&O Audio.",
    "price": 49990,
    "originalPrice": 56144,
    "quantity": 11,
    "discountPercent": 10,
    "createdDate": "2021-05-24T05:16:18",
    "productImage": [
      {
        "id": 7,
        "imageUrl": hp1
      },
      {
        "id": 8,
        "imageUrl": hp2
      },
      {
        "id": 9,
        "imageUrl": hp3
      }
    ],
    "rating": 3,
    "expressDelivery": false
  },
  {
    "id": 4,
    "title": "Sony PS5 DualSense Wireless Controller  (White, For PS5)",
    "description": "DualSense, Wireless Controller, Instruction Manual, Bluetooth compatible with all devices",
    "price": 5990,
    "originalPrice": 5990,
    "quantity": 4,
    "discountPercent": 0,
    "createdDate": "2021-05-24T05:23:46",
    "productImage": [
      {
        "id": 10,
        "imageUrl": sony1
      },
      {
        "id": 11,
        "imageUrl": sony2
      }
    ],
    "rating": 3,
    "expressDelivery": false
  }
]

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      cartData:[],
      searchValue:'',
      sortPriceText:true,
      sortdateValue:true,
      sortProductID:true,
      sortProductName:true,
      showPopup:false,
      popupData:[],
      addCartArray:[],
      cartAdded:false
    }
    this.searchFunction= this.searchFunction.bind(this);
    this.sortPrice=this.sortPrice.bind(this);
    this.sortDate=this.sortDate.bind(this);
    this.sortID=this.sortID.bind(this);
    this.sortName=this.sortName.bind(this);
    this.closePopup=this.closePopup.bind(this);
  }

  componentDidMount(){
    // const corsurl = 'https://cors-anywhere.herokuapp.com';
    // axios.get(corsurl+Api).then((res)=>{
    //   this.setState({isLoading:false,cartData:res.data})
    // });
    setTimeout(()=>{
      this.setState({isLoading:false,cartData:Apidata});
    },1500)
   
  }

  searchFunction(e){
    this.setState({searchValue: e.target.value});
    var searchValue=this.state.searchValue.toLowerCase()
    const searchFilterRows= document.getElementsByClassName('cart-product-individual-section');
    for(var i=0;i<searchFilterRows.length;i++){
      const filteredRows= searchFilterRows[i].getElementsByClassName('cart-product-title')[0];
      const matchFilteredRowText= filteredRows.textContent.toLowerCase() || filteredRows.innerText.toLowerCase();
      if(matchFilteredRowText.indexOf(searchValue)>-1){
        searchFilterRows[i].style.display=''
      } 
      else{
        searchFilterRows[i].style.display='none';
      }
    }
  }

  sortID(){
    this.setState(state=>({sortProductID: !state.sortProductID }));

    if(this.state.sortProductID){
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return a.id-b.id;
      })
      this.setState({cartData:sortArray})
    }
    else{
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return b.id-a.id;
      })
      this.setState({cartData:sortArray})
    }
  }

  sortName(){
    const {cartData}=this.state;
    this.setState(state=>({sortProductName: !state.sortProductName}));
    let sortArray=[];
    console.log(cartData.title.sort())
    if(this.state.sortProductName){
      sortArray=cartData.sort(function(a,b){
        //return (a.title.toLowerCase()-b.title.toLowerCase())>-1;
        var textA=a.title.split('',1);
        var textB=b.title.split('',1);
        //console.log(textA.toLowerCase(),textB.toLowerCase())
        console.log(textA[0],textB[0].toUpperCase())
        return (textA[0]-textB[0].toUpperCase())>-1;
      })
      this.setState({cartData:sortArray});
    }
    else{
        sortArray=cartData.sort(function(a,b){
          //return (b.title.toLowerCase()-a.title.toLowerCase())>-1;
          var textA=a.title.split('',1);
          var textB=b.title.split('',1);
          //console.log(textA.toLowerCase(),textB.toLowerCase())
          console.log(textA[0],textB[0].toUpperCase())
          return (textA[0]-textB[0].toUpperCase())>-1;
        })
        this.setState({cartData:sortArray});
      }
      console.log(sortArray);
  }
 
  sortPrice(){
    this.setState(state=>({sortPriceText: !state.sortPriceText }));

    if(this.state.sortPriceText){
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return a.price-b.price;
      })
      this.setState({cartData:sortArray})
    }
    else{
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return b.price-a.price;
      })
      this.setState({cartData:sortArray})
    }
  }

  sortDate(){
    this.setState(state=>({sortdateValue: !state.sortdateValue}))

    if(this.state.sortdateValue){
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return new Date(a.createdDate)-new Date(b.createdDate);
      })
      this.setState({cartData:sortArray});
    }
    else{
      const {cartData}=this.state;
      let sortArray=[];
      sortArray=cartData.sort(function(a,b){
        return new Date(b.createdDate)-new Date(a.createdDate);
      })
      this.setState({cartData:sortArray})
    }
  }

  // filterEvents(e,value){
  //   let selectedOption=value.target.outerText.toLowerCase();
  //   console.log(selectedOption);
  //   if(selectedOption==="true"){
  //     const searchFilterRows= document.getElementsByclassName('cart-product-individual-section');
  //     for(var i=0;i<searchFilterRows.length;i++){
  //       const filteredRows= searchFilterRows[i].getElementsByclassName('cart-product-expressDelivery')[0];
  //       const matchFilteredRowText= filteredRows.textContent.toLowerCase() || filteredRows.innerText.toLowerCase();
  //       if(matchFilteredRowText.indexOf(selectedOption)>-1){
  //         searchFilterRows[i].style.display=''
  //       } 
  //       else{
  //         searchFilterRows[i].style.display='none';
  //       }
  //     }
  //   }
  //   else{
  //     const searchFilterRows= document.getElementsByclassName('cart-product-individual-section');
  //     for( i=0;i<searchFilterRows.length;i++){
  //       const filteredRows= searchFilterRows[i].getElementsByclassName('cart-product-expressDelivery')[0];
  //       const matchFilteredRowText= filteredRows.textContent.toLowerCase() || filteredRows.innerText.toLowerCase();
  //       if(matchFilteredRowText.indexOf(selectedOption)>-1){
  //         searchFilterRows[i].style.display=''
  //       } 
  //       else{
  //         searchFilterRows[i].style.display='none';
  //       }
  //     }
  //   }
  // }

  openPopup(e,data){
    this.setState({popupData:e});
    this.setState({showPopup:true});
  }

  closePopup(){
    this.setState({showPopup:false})
  }

  addCart(e,data){
   const {addCartArray}=this.state;
   addCartArray.push(e);
   this.setState({cartAdded:true});
  }

  clickTotalCart(e){
   if(document.getElementsByClassName('dropdown-content')[0].classList.contains('show')){
    document.getElementsByClassName('dropdown-content')[0].classList.remove('show');
   } 
   else{
    document.getElementsByClassName('dropdown-content')[0].classList.add('show');
   }
  }

  render(){
    const {isLoading,cartData,addCartArray}=this.state;
    if (isLoading){
      return <Loader />
    }
    else{
      return(
        <div className="cart-page">
          <div className="cart-page-header-section">
              <h1 className="cart-page-header-section-name">Welcome to Cart Page</h1>
          </div>
          <div className="cart-page-body-section">
              <div className="row float-parent cart-page-manipulations-section">
                  <div className="float column-3 text-center" >
                      <input className="cart-product-search-section" placeholder="Enter Product Name" type="text" value={this.state.searchValue} onChange={this.searchFunction}></input>
                  </div>
                  <div className="float column-3  text-center borderRight" >
                      <button className="cart-product-filter-section white-CTA tooltip">Filter  <i className="fa fa-solid fa-filter icon-theme-color"></i><span className="tooltiptext">Yet To Start</span></button>
                  </div>
                  <div className="float column-3  text-center borderRight">
                      <button className="cart-product-total-cart-section theme-CTA"  onClick={this.clickTotalCart.bind(this)}>Total Cart <i className="fa fa-solid fa-cart-plus icon-theme-background"><sup className='cart-product-total-cart-section-superscript'>{addCartArray.length}</sup></i></button>
                      <div className="dropdown-content">
                        {this.state.cartAdded ? <div>{addCartArray.map(data=><p className="dropdown-individual total-cart-products" onClick={this.openPopup.bind(this,data)}>{data.title}</p>) }</div>:<p className="dropdown-individual"><b>Your Shopping Cart is Empty</b></p>}
                        </div>
                  </div>
              </div>
              <table className="row text-center">
                  <thead className="cart-product-section-head">
                      <tr>
                          <th className="cart-product-id-head" onClick={this.sortID}> Product ID{this.state.sortProductID?<i className="fas fa-sort-numeric-down-alt icon-theme-background"></i>:<i className="fas fa-sort-numeric-up icon-theme-background"></i>} </th>
                          {/* <th className="cart-product-title-head"onClick={this.sortName}> Product Name{this.state.sortProductName?<i className="fas fa-sort-alpha-down-alt icon-theme-background"></i>:<i className="fas fa-sort-alpha-up icon-theme-background"></i>}</th> */}
                          <th className="cart-product-title-head"> Product Name</th>
                          <th className="col-sm-none cart-product-original-price-head cart-product-price-sort-section" onClick={this.sortPrice}> Price{this.state.sortPriceText?<i className="fas fa-sort-numeric-down-alt icon-theme-background"></i>:<i className="fas fa-sort-numeric-up icon-theme-background"></i>} </th>
                          <th className="col-sm-none cart-product-date-created-head"onClick={this.sortDate}>Date {this.state.sortdateValue ?<i className="fas fa-sort-numeric-down-alt icon-theme-background"></i>:<i className="fas fa-sort-numeric-up icon-theme-background"></i>} </th>
                          <th className="cart-product-cta-head">Add Cart</th>
                      </tr>
                  </thead>
                  <tbody className="cart-product-section-body cart-product-section">
                    {cartData.map(data=>
                      <tr key={data.id} className="cart-product-individual-section">
                          <td className="cart-product-id-body">{data.id}</td>
                          <td className="cart-product-title-body cart-product-title" onClick={this.openPopup.bind(this,data)}>{data.title}</td>
                          <td className="col-sm-none cart-product-original-price-body cart-product-original-price"><b style={{fontSize:'16px'}}>&#8377;{data.price}</b><span style={{textDecoration:'line-through',marginLeft:'5px',fontSize:'12px'}}>(&#8377;{data.originalPrice})</span></td>
                          <td className="col-sm-none cart-product-date-created-body cart-product-date-created">{data.createdDate}</td>
                          <td className="cart-product-cta-body"><button className="theme-CTA" onClick={this.addCart.bind(this,data)}>Add Cart</button></td>
                      </tr>
                      )}
                  </tbody>
              </table>
            </div>
          {this.state.showPopup &&<Popup data={this.state.popupData} closePopup={this.closePopup}/>}
        </div>
      )
    }
   
  }
}

export default App