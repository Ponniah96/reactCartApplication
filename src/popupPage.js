import React from 'react';
import './styles/popupPage.scss';
import "./styles/loading.scss";
import "./styles/cartPage.scss";

class productPopupPage extends React.Component{

    componentDidMount(){
        var slideIndex = 1;
        var i,n=1;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    plusSlides(n,e) {
        console.log(e,n)
        var slideIndex = n+1;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        }
      
       currentSlide(n,e) {
        var slideIndex = n;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
      }

    render(){
        return(
            <div className="popup-page">
            <div className="popup-background"  onClick={this.props.closePopup}></div>
            <div className="popup-section">
                <div className="row float-parent popup-product-header">
                    <h3 className="float">Product Details</h3>
                    <i className="fas fa-times popup-close "onClick={this.props.closePopup}></i>
                </div>
                <div className="row popup-images">
                    <div className="slideshow-container">
                    {this.props.data.productImage.map(imgData=><div className="mySlides fade" style={{display: "block"}}><img src={imgData.imageUrl} alt={imgData.id} style={{width:"100%"}}></img></div>)}
                        <span className="prev"  onClick={this.plusSlides.bind(this,-1)}>&#10094;</span>
                        <span className="next" onClick={this.plusSlides.bind(this,1)}>&#10095;</span>
                    </div>
                    <div style={{display:"none"}}>
                        <span className="dot" onClick={this.currentSlide.bind(1)}></span> 
                        <span className="dot" onClick={this.currentSlide.bind(2)}></span> 
                        <span className="dot" onClick={this.currentSlide.bind(3)}></span> 
                    </div>
                </div>
                <div className="popup-product-details">
                    <div className="row float-parent popup-product-name-section">
                        <div className="column-25 float">Name:</div>
                        <div className="column-75 float"><b>{this.props.data.title}</b></div>
                    </div>
                    <div className="row float-parent popup-product-name-section">
                        <div className="column-25 float">Decription:</div>
                        <div className="column-75 float"><b>{this.props.data.description}</b></div>
                    </div>
                    <div className="row float-parent popup-product-name-section">
                        <div className="column-25 float">Price:</div>
                        <div className="column-75 float"><b style={{fontSize:'16px'}}>&#8377;{this.props.data.price}</b><span style={{textDecoration:'line-through',marginLeft:'5px',fontSize:'12px'}}>(&#8377;{this.props.data.originalPrice})</span></div>
                    </div>
                    <div className="row float-parent popup-product-name-section">
                        <div className="column-25 float">Ratings:</div>
                        <div className="column-75 float"><b>{this.props.data.rating}/10</b></div>
                    </div>
                    <div className="row float-parent popup-product-name-section">
                        <div className="column-25 float">Express Delivery:</div>
                        <div className="column-75 float"><b>{this.props.data.expressDelivery ?'True':'false'}</b></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default productPopupPage