import React from 'react';
import './styles/productPopup.scss';
class productPopupContainer extends React.Component{
   
    // componentDidMount(){
    //     var slideIndex = 1;
    //     showSlides(slideIndex);
        
    //     function plusSlides(n) {
    //       showSlides(slideIndex += n);
    //     }
        
    //     function currentSlide(n) {
    //       showSlides(slideIndex = n);
    //     }
        
    //     function showSlides(n) {
    //       var i;
    //       var slides = document.getElementsByClassName("mySlides");
    //       var dots = document.getElementsByClassName("dot");
    //       if (n > slides.length) {slideIndex = 1}    
    //       if (n < 1) {slideIndex = slides.length}
    //       for (i = 0; i < slides.length; i++) {
    //           slides[i].style.display = "none";  
    //       }
    //       for (i = 0; i < dots.length; i++) {
    //           dots[i].className = dots[i].className.replace(" active", "");
    //       }
    //       slides[slideIndex-1].style.display = "block";  
    //       dots[slideIndex-1].className += " active";
    //     }
    // }
   
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Product Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slideshow-container">
                                        <div className="mySlides fade" style="display: block;">
                                            <div className="numbertext">1 / 3</div>
                                            <img src='image_mockups/image1.jpg' style="width:100%"></img>
                                            <div className="text">Caption Text</div>
                                        </div>
                                        
                                        <div className="mySlides fade">
                                            <div className="numbertext">2 / 3</div>
                                            <img src='image_mockups/image2.jpeg' style="width:100%"></img>
                                            <div className="text">Caption Two</div>
                                        </div>
                                        
                                        <div className="mySlides fade">
                                            <div className="numbertext">3 / 3</div>
                                            <img src="image_mockups/image3.jpg" style="width:100%"></img>
                                            <div className="text">Caption Three</div>
                                        </div>
                                        
                                        <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                                        <a className="next" onclick="plusSlides(1)">&#10095;</a>
                                        
                                    </div>
                                    <br></br>
                                    <div style="text-align:center">
                                        <span className="dot" onclick="currentSlide(1)"></span> 
                                        <span className="dot" onclick="currentSlide(2)"></span> 
                                        <span className="dot" onclick="currentSlide(3)"></span> 
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-3">Product Name:</div>
                            <div className="col-9"><b>This is Product Name</b></div>
                        </div>
                        <div className="row">
                            <div className="col-3">Description:</div>
                            <div className="col-9"><b>This is Product Description</b></div>
                        </div>
                        <div className="row">
                            <div className="col-3">Price:</div>
                            <div className="col-9"><b>This is Product Price</b></div>
                        </div>
                        <div className="row">
                            <div className="col-3">Rating:</div>
                            <div className="col-9"><b>This is Product Rating</b></div>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <div className="row w-100 text-center">
                                <div className="col-6"><button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button></div>
                                <div className="col-6"><button type="button" className="btn btn-primary">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div> 
                </div>
        )
    }
}

export default productPopupContainer





//   // async componentDidMount(){
//   //   const url='http://mocsyamtestapi-env.eba-dvawv2zg.ap-south-1.elasticbeanstalk.com/products/?pageNumber=0';
//   //   //fetch(url).then(res=>res.json()).then(json=>{this.setState({isLoading:false, cartData:json})});
//   //   const response=await fetch(url);
//   //   const jsonConversion=response.json();
//   //   const data= jsonConversion.then(function(result){
//   //     return result
//   //   })
//   //   this.setState({isLoading:false, cartData:data});
//   //     console.log('cartData: ',data);
//   // }
// {/* <div classNameName="cart-page">        
//           <div classNameName="cart-page-section" >
//             <h1 style={{textAlign:'center'}}>Welcome To Cart Page</h1>  
//             <div classNameName="cart-product-manipulation-section" style={{paddingBottom:'20px',borderBottom:'2px solid #d0d0d0'}}>
//               <div style={{textAlign:'center'}}>
//                 Seacrh By product name:
//                 <input classNameName="cart-product-search-section" placeholder="Enter Product Name" type="text" value={this.state.searchValue} onChange={this.searchFunction} style={{marginLeft:'10px'}}></input>
//               </div>
//               <br></br>
//               <div style={{textAlign:'center'}}>
//                 Sort Price:
//                 <button classNameName="cart-product-price-sort-section" onClick={this.sortPrice} style={{marginLeft:'50px'}}>{this.state.sortPriceText?'Sort Price (Asc)':'Sort Price (Des)'}</button><br></br>
//               </div>
//               <br></br>
//               <div style={{textAlign:'center'}}>
//                 Sort Date:
//                 <button classNameName="cart-product-date-sort-section" onClick={this.sortDate} style={{marginLeft:'50px'}}>{this.state.sortdateValue ? "Sort Date (Asc)" : "Sort Date (Des)"}</button>
//               </div>
              
//              </div>
//             <div classNameName="cart-product-section" style={{paddingTop:'20px'}}>   
//               {cartData.map(data=>
//                 <div key={data.id} classNameName="cart-product-individual-section" style={{borderBottom:'2px solid #d0d0d0'}}>
//                   {/* <div classNameName="cart-product-id">{data.id}</div> */}
//                   <div classNameName="cart-product-title">{data.id}.Product Name: <b>{data.title}</b></div><br></br>
//                   <div classNameName="cart-product-descripition">Product Description: <b>{data.description}</b></div><br></br>
//                   <div classNameName="cart-product-original-price">Product Price: <span style={{textDecoration:'line-through',paddingRight:'20px'}}>&#8377;{data.originalPrice}</span><b>&#8377;{data.price}</b></div><br></br>
//                   <div classNameName="cart-product-date-created">Product Created date: <b>{data.createdDate}</b></div><br></br>
//                   <div><b>Product Images:</b></div>
//                   <div classNameName="cart-product-images">
//                     {data.productImage.map(imgData=>
//                     <img key={imgData.id} classNameName="cart-product-individual-images" src={imgData.imageUrl} alt={data.title} style={{padding:'30px',width:'300px',height:'300px'}}></img>)}
//                   </div>
//                 </div>
                
//               )}
//             </div>
//           </div>
//         </div> */}
    


// {data.productImage.map(imgData=>{imgData.imageUrl})}

{data.productImage.map(imgData=><div className="each-slide"><div style={{'backgroundImage': `url(${imgData.imageUrl})`}}></div></div>)}


<div className="each-slide"><div style={{'backgroundImage': `url(${imgData.imageUrl})`}}></div></div>