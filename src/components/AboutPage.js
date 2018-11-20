import React, { Component }  from 'react';
import './AboutPage.css';
import lightimg from '../imgs/light.png';
import incline from '../imgs/increasing-line-orange.svg';
import tagscluster from '../imgs/keyword-research.jpg';

class AboutPage extends Component{
	constructor(props) {
		super(props);

		this.state = {
			'baseurl' : window.location.href,
			'curslide' : 1,
			'preslide' : 1
		};
	};

	s1 = () =>{
		const cur= 1, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};
	s2 = () =>{
		const cur= 2, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};
	s3 = () =>{
		const cur= 3, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	s4 = () =>{
		const cur= 4, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	s5 = () =>{
		const cur= 5, pre = this.state.curslide;
		this.setState({curslide:cur, preslide:pre});
	};

	set_selected = (linkmove) =>{
		// document.getElementById("li"+this.state.preslide).classList.remove("selected");
		// document.getElementById("li"+this.state.curslide).classList.add("selected");
		if(linkmove)
			window.location.href = this.state.baseurl.split("#")[0] + "#" +this.state.curslide;
	};


	componentDidMount() {
		console.log('componentdidmount');
		const sY = 771, halfsY = 771/3;		
		var all_clear = function(){
			document.getElementById("li1").classList.remove("selected");
			document.getElementById("li2").classList.remove("selected");
			document.getElementById("li3").classList.remove("selected");
			document.getElementById("li4").classList.remove("selected");
			document.getElementById("li5").classList.remove("selected");
		};

		window.onscroll = function(ev) {
			if (window.scrollY < halfsY){
				all_clear();
				document.getElementById("li1").classList.add("selected");
			}else if(1*sY <= window.scrollY && window.scrollY < 1*sY + halfsY ){
				all_clear();
				document.getElementById("li2").classList.add("selected");
			}else if(2*sY <= window.scrollY && window.scrollY < 2*sY + halfsY){
				all_clear();
				document.getElementById("li3").classList.add("selected");
			}else if(3*sY <= window.scrollY && window.scrollY < 3*sY + halfsY){
				all_clear();
				document.getElementById("li4").classList.add("selected");
			}else if(4*sY <= window.scrollY && window.scrollY < 4*sY + halfsY){
				all_clear();
				document.getElementById("li5").classList.add("selected");
			}
		};
	};

	shouldComponentUpdate(){
		console.log("shouldComponentUpdate");
		return true;
	};

	componentDidUpdate(){
		console.log("componentDidUpdate");
		this.set_selected(true);
	};

	render() {
		const s1 = this.s1, s2 = this.s2, s3 = this.s3, s4 = this.s4, s5 = this.s5;
		return (
			<div id='about-page'>
			    <nav className="stepper-navigation">
		            <ul className="stepper-navigation">
		                <li className="stepper-navigation selected" id="li1"><button onClick={s1}>1</button></li>
		                <li className="stepper-navigation" id="li2"><button onClick={s2}>2</button></li>
		                <li className="stepper-navigation" id="li3"><button onClick={s3}>3</button></li>
		                <li className="stepper-navigation" id="li4"><button onClick={s4}>4</button></li>
		                <li className="stepper-navigation" id="li5"><button onClick={s5}>5</button></li>
		                {/*<li className="stepper-navigation"><a href="#fifth">5</a></li>*/}
		            </ul>
		        </nav>
		        <div className="about-navbar about-sticky">
				  <a href="https://master.cerebroscholar.com">Skip</a>
				</div>
		        <article className="slide first" id="1">
		            <h1>
		            	<img src="https://static.cerebroscholar.com/logo.svg" alt="Cerebro Scholar logo" className="about-logo" />
		            </h1>
		            <h2 className='logo-subtitle'>Academic Trend Analytics Service</h2>
		            <p>
		                Discover trends in the scientific research.
		            </p>
		            <p>
		            	EASY, FAST, VISIBLE !
		            </p>
		        </article>

		        <article className="slide second" id="2">
		        	<img src={lightimg} alt='insight' className="imgs-light" />
		            <p>
		                We provide <b className="highlight">insights</b> for a scientific research<br />
		                to make your research efficient<br />		                
		            </p>
		        </article>

		        <article className="slide third" id="3">
		        	<img src={incline} alt='line' className='lineimg' />
		            <p>
		                There are so many papers published each year. <br />
		                It is <b className="highlight">impossible to follow up</b> with all the papers even in one area.
		            </p>
		        </article>

		        <article className="slide fourth" id="4">
		        	<img src={tagscluster} alt='tagscluster' className="keywordsimgs" />
		            <p>
		                Cerebro Scholar is the <b className="highlight">Academic Trend Analytics Service</b> <br />
		                based on keywords of paper<br />		                
		            </p>
		        </article>
		        <article className="slide fifth" id="5">
		            <p>
		                Use <b className="highlight">Cerebro.Scholar</b> to get an insight!<br />
		                <a href="https://master.cerebroscholar.com">Join Cerebro.Scholar!</a>
		            </p>
		        </article>
	        </div>
		);
	}
};

export default AboutPage