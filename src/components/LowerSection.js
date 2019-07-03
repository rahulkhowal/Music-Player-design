import React,{Component} from 'react'
import {withStyles} from '@material-ui/core'
import cd from '../photos/cd.png'
import music from '../photos/music.png'
import arrow from '../photos/play-arrow.png'
import App from '../App'
const STYLES=theme=>({
img:{
 	backgroundColor:'#F8F8F8',
 	position: 'absolute',
	left: '8%',
	top: '80%',
 },
div:{
	flex: 1,
	backgroundColor:'#F8F8F8'
},
music:{
	backgroundColor:'#ededee',
	position:'absolute',
	left:"66%",
	top:"90%"
},
Heading:{
	position:'absolute',
	left:'66%',
	top:'80%'
},
current:{
	position:'absolute',
	left:'66%',
	top:'85%',
	fontstyle: 'italics',
	color:"#708090",
	fontWeight: '200',
	fontsize:'5%'
},
div1:{
   flex: 1,
   position:'absolute',
   left:'70%',
   top:'110%',
   bottom:'10%',
   padding:'4%'
},
Now:{
	flex:1,
	position:'absolute',
    left:'75%',
   top:'100%'
},

time:{
	float:'right'
}

})

class LowerSection extends Component{
	state={
		 SongsList:[{id:1,name:'We lived in Paris',time:'2.71'},{id:2,name:'We lived in India',time:'3.71'},{id:3,name:'We lived in lanka',time:'3.71'},{id:4,name:'We lived in place',time:'4.71'},{id:5,name:'We lived in Paris',time:'4.84'},{id:6,name:'We lived in Rusia',time:'3.71'}],
	     NowPlaying:'',
	     click: false
	}
	handleChange=(e)=>{
	e.preventDefault()
	//console.log('hi')
	//this.state.NowPlaying.length=0;
	 //const name :e.target.name
	
	this.setState({
		click:true,
       NowPlaying: e.target.name
	})
	//this.props.history.push('App')
	 //console.log(name)
   }
	render(){
		const{classes}=this.props
		const itemContainer =this.state.SongsList.map((curr)=>{
                      return(
            	        <div className={classes.div} keys={curr.id}>
            	          <img src={arrow} width="3%" height="5%" />
            	          <span onClick={this.handleChange}>{curr.name}</span>
            	          <span >...................................{curr.time}</span>
            	          </div>
                       )
                      })
		return(
           <div className={classes.div}>
              <img src={cd}
                width="40%"
			    height="30%"
			    alt="Cd"
			    className={classes.img}
			   />
			  <img src={music}
              width="24%"
              height="15%"
              alt="musicplayer"
              className={classes.music}
              />
            <h2 className={classes.Heading}>Now Playing</h2>
            {
            	(this.state.NowPlaying==null ? 
            	<h4 className={classes.current}>{this.state.NowPlaying}</h4> :null
                )
            }
            {
                (this.state.NowPlaying==null ?
                <h3 className={classes.Now}>{this.state.NowPlaying}</h3>:null
                )
              }
            <div className={classes.div1}>{itemContainer}</div>
			</div>

		)
	}
}
export default withStyles(STYLES)(LowerSection)