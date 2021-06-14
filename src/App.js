import React from "react";
import "./styles/loading.scss";
import "./styles/cartPage.scss";
import './styles/popupPage.scss';
import Loader from './Loader';
import Popup from './popupPage';
import axios from "axios";
const Api='http://mocsyamtestapi-env.eba-dvawv2zg.ap-south-1.elasticbeanstalk.com/products/?pageNumber=0';

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
    axios.get(Api).then((res)=>{
      this.setState({isLoading:false,cartData:res.data})
    });
    console.log(this.state.addCartArray.length);
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
    if(this.state.sortProductName){
      sortArray=cartData.sort(function(a,b){
        return (a.title.toLowerCase()-b.title.toLowerCase())>-1;
      })
      this.setState({cartData:sortArray});
    }
    else{
        sortArray=cartData.sort(function(a,b){
          return (b.title.toLowerCase()-a.title.toLowerCase())>-1;
        })
        this.setState({cartData:sortArray});
      }
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
    console.log(e);
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
                      <button className="cart-product-filter-section white-CTA">Filter <i className="fa fa-solid fa-filter icon-theme-color"></i></button>
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
                          <th className="cart-product-title-head"onClick={this.sortName}> Product ID{this.state.sortProductName?<i className="fas fa-sort-alpha-down-alt icon-theme-background"></i>:<i className="fas fa-sort-alpha-up icon-theme-background"></i>}</th>
                          <th className="cart-product-original-price-head cart-product-price-sort-section" onClick={this.sortPrice}> Price{this.state.sortPriceText?<i className="fas fa-sort-numeric-down-alt icon-theme-background"></i>:<i className="fas fa-sort-numeric-up icon-theme-background"></i>} </th>
                          <th className="col-sm-none cart-product-date-created-head"onClick={this.sortDate}>Date {this.state.sortdateValue ?<i className="fas fa-sort-numeric-down-alt icon-theme-background"></i>:<i className="fas fa-sort-numeric-up icon-theme-background"></i>} </th>
                          <th className="col-sm-none cart-product-cta-head">Add Cart</th>
                      </tr>
                  </thead>
                  <tbody className="cart-product-section-body cart-product-section">
                    {cartData.map(data=>
                      <tr key={data.id} className="cart-product-individual-section">
                          <td className="cart-product-id-body">{data.id}</td>
                          <td className="cart-product-title-body cart-product-title" onClick={this.openPopup.bind(this,data)}>{data.title}</td>
                          <td className="cart-product-original-price-body cart-product-original-price"><b style={{fontSize:'16px'}}>&#8377;{data.price}</b><span style={{textDecoration:'line-through',marginLeft:'5px',fontSize:'12px'}}>(&#8377;{data.originalPrice})</span></td>
                          <td className="col-sm-none cart-product-date-created-body cart-product-date-created">{data.createdDate}</td>
                          <td className="col-sm-none cart-product-cta-body"><button className="theme-CTA" onClick={this.addCart.bind(this,data)}>Add Cart</button></td>
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