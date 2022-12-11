import "./style.css"
import React, { Component } from 'react'
import Card from "./card"
import Portal from "./portal"
import DarkButton from "./darkButton"

class Temperature extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inputData: "delhi",
            mainData: {}
        }
        this.inputFocus=React.createRef();
        this.errorRef=React.createRef();
        this.setInputData = this.setInputData.bind(this)
        this.tempInfo = this.tempInfo.bind(this)
        this.enter=this.enter.bind(this)
        
    }

    componentDidMount(){
        this.inputFocus.current.focus();
        this.tempInfo()
       

    }
   
    floateError(){
        
          console.log("hello")
            this.errorRef.current.style.visibility="visible";
    
        setTimeout(() => {
            this.errorRef.current.style.visibility="hidden";
        }, 3000);
    }
   
    //api fetching and data handeling
    tempInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputData}&units=metric&appid=fd688bc5c745751ad3f05766bb77d82d`
            const apiData = await fetch(url)
            const myData = await apiData.json()
            if (myData.cod === '404')
                throw new Error(myData.message);


            const { temp, temp_max, temp_min, humidity, pressure } = myData.main
            const cityName = myData.name
            const country = myData.sys.country
            const wind = myData.wind.speed
            const weatherCon = myData.weather[0].main
            let sunset=new Date(myData.sys.sunset*1000)
            sunset=`${sunset.getHours()}:${sunset.getMinutes()}PM`

            const dataArray = {
                temp,
                temp_max,
                temp_min,
                humidity,
                pressure,
                cityName,
                country,
                wind,
                weatherCon,
                sunset
            }
            
            
                this.setState({ mainData: dataArray })
        } catch (error) {
            console.log(error);
            this.floateError();
        }
    }
    //enter button event
    enter=(e)=>{
       
        if(e.key==='Enter')
        {
           
            this.tempInfo()
        }
    }
    setInputData = (e) => {
        this.setState({
            inputData: e.target.value
        })
    }
    render() {
        return (
            <>
                <div className="wrap">
                    <div className="search">
                        <input type="search"
                            placeholder='search...'
                            id='search'
                            className='searchTerm'
                            value={this.state.inputData}
                            onChange={this.setInputData}
                            onKeyDown={this.enter}
                            ref={this.inputFocus}
                        />
                        <button className='searchButton' type='button' onClick={this.tempInfo} >Search</button>
                    </div>

                </div>

                {/* term card */}
                <Card prop={this.state.mainData}/>
                {/* for error only */}
                <Portal ref={this.errorRef} />
                {/* DarkButton */}
                <DarkButton/>

            </>
        )
    }
}






export default Temperature
