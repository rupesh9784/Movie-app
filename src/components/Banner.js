import { Component } from "react";
import {movies} from "../movieData"
import axios from 'axios'
class Banner extends Component {
    constructor(){
        super();
        this.state = {
            movie:""

        }
    }

    async componentDidMount(){
        console.log("Component did React");
        const res  = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f78e7fe9ba6153bc3b9241b4f5723194&language=en-US&page=1')
      
        this.setState({
            movie:res.data.results[0]
        })
    }

    render() {
        // let movie = movies.results[Math.floor(Math.random() * 10)];
        let backdrop_path = this.state.movie.backdrop_path;
       
        return (
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                        <h1 className="card-title banner-title">{this.state.movie.title}</h1>
                        <p className="card-text banner-text">{this.state.movie.overview}</p>
            </div>
        )
    }
}

export default Banner