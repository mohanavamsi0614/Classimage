import { Component } from "react";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Classcar extends Component{
    constructor(){
        super()
        this.state={
            curr:0
        }
        this.image=images

    }
    render(){
        return(
            <>
            
                <img src={this.image[this.state.curr].img}></img>
                <h1 className="title">{this.image[this.state.curr].title}</h1>
                <h2 className="des">{this.image[this.state.curr].subtitle}</h2>
                <div className="bu">
                <div className="no">
                <ArrowBackIosIcon onClick={()=>{
                    let check = this.state.curr == 0 ? 2 : this.state.curr-1;
                    this.setState({curr:check})
                }} className="n"/>
                </div>
                <div className="no">
                <ArrowForwardIosIcon onClick={()=>{
                    let check=this.state.curr == 2 ? 0 : this.state.curr+1;
                      this.setState({curr:check});
                }} className="n"/>
                </div>
                 </div>
            </>
        )
    }

}
export default Classcar;