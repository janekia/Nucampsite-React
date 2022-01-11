import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class Contactus extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            lastname:'',
            email:'',
            messege:'',
            sent:false
        };
}

 handleName =(e)=>{
     this.setState({
         name:e.target.value
     })

 }

 handleLastname =(e)=>{
    this.setState({
        lastname:e.target.value
    })

}

handleEmail =(e)=>{
    this.setState({
        email:e.target.value
    })

}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })

}

formSubmit=(e)=>{
    e.preventDefault();

    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message

    }

axios.post('api/forma',data)
.then(res=>{
    this.setState({
        sent:true,
    },this.resetform())
})
.catch(()=>{
    console.log('Message not sent')
})


}

resetForm=()=>{
    this.setState({
        name:'',
        lasname:'',
        email:'',
        message:'',
    })
    setTimeout(()=> {
        this.setState({
            sent:false
        })
    },3000)
}

    render() {
    return (
        <div className='container'>
            <form onclick={this.formSubmit}>
                <div className='singleItem'>
                    <label htmlfor='name'>Name</label> 
                    <input type='text' name='name' className='name' placeholder='your name....' 
                   value={this.state.name} onChange={this.handleName} />
                </div>

                <div className='singleItem'>
                    <label htmlfor='last name'>Lastname</label> 
                    <input type='text' name='lastname' className='lastname' placeholder='your last name....'
                    value={this.state.lastname} onChange={this.handleLastname}/>
                </div>

                <div className='singleItem'>
                    <label htmlfor='email'>Email</label> 
                    <input type='text' name='email' className='email' placeholder='your email....'
                    value={this.state.email} onChange={this.handleEmail} required/>
                </div>

                <div className='singleItem' className='textArea'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='' col='30' row='5' placeholder='your message....'
                    value={this.state.message} onChange={this.handleMessage}></textarea> 
                </div>

                <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                <div className='btn'>
                    <button type='submit'>submit</button>
                </div>
            </form>
      </div>
    )
    }
}

export default Contactus;