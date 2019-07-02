import React,{Component} from 'react'
import {withStyles} from '@material-ui/core'
import boy from'../photos/boy.png'
import back from '../photos/back.png'
import next from '../photos/next.png'
const STYLES= theme =>({
 img:{
 	backgroundColor:'#F8F8F8',
 	position: 'absolute',
	left: '15%',
	top: '10%',
 },
 div: {
		flex: 1
	},
previous:{
	//float: 'left',
	backgroundColor:'#F8F8F8',
	width:'full',
	color: 'grey',
	height:'20%',
	left: '-15%',
	top: '10%',
	transform: 'translate(-400%,45%)',
},
next:{
	//float:'Right',
	backgroundColor:'#F8F8F8',
	width:'full',
	color: 'grey',
	height:'60%',
	left: '-15%',
	top: '10%',
	transform: 'translate(400%,45%)',
},
Headline:{
       position: 'absolute',
		top: '28%',
		left: '78%',
		transform: 'translate(-100%,-40%)',
		display: 'flex',
		color: '#323232',
		fontWeight: '800',
		fontsize: '100%',
		fontstyle: 'oblique'
},
Paragraph:{
       position: 'absolute',
		top: '42%',
		left: '80%',
		transform: 'translate(-100%,-40%)',
		display: 'flex',
		color: '#4c4c4c',
		fontWeight: '400',
		fontsize: '100%',
		fontstyle: 'oblique'
}

})
class UpperSection extends Component{
   render(){
       const { classes }= this.props
	   return(
          <div className={classes.div}>
           <img src={back} width="10%" height="10%" className={classes.previous}/>
           <img src={next} width="10%" height="10%" className={classes.next}/>
            <img src={boy}
			        width="25%"
					height="60%"
					alt="FirstSlide"
					className={classes.img}
            />


            <h1 className={classes.Headline}>Meet Our Band</h1>
            <p className={classes.Paragraph}>
              We were staying in Paris To get away from
              your parents
               And I thought, "Wow If I could 
               take this in a shot right now
               I don't think that we could work 
               this out Out on the terrace
               I don't know if it's fair but
               I thought How Could I let you 
            </p>
           </div>
		)
  }
	
}
export default withStyles(STYLES)(UpperSection)