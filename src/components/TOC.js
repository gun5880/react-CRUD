import React, {Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log('-->TOC render should'
        ,newProps.data //바뀐값
        ,this.props.data);//기존의 값
        if(this.props.data === newProps.data){
            return false;
        }
        return true; //false면 render() 호출 x
    }

    render(){
        console.log('toc');
        var list = [];
        var data = this.props.data
        var i = 0;
        while(i<data.length){
            list.push(<li key={data[i].id}>
                <a href={"/content/"+data[i].id}
                onClick={function(id,e) {
                    e.preventDefault();
                    this.props.onChangePage(id);
                }.bind(this,data[i].id)}
                >{data[i].title}</a> 
                </li>)
            i++;
        }
      return (
        <nav>
        <ul>
           {list}
        </ul>
    </nav>
      );
    }
  }

  export default TOC;