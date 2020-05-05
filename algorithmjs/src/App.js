import React from 'react';
import './App.css';

let array1 = [1];
let array2 = [1, 2];
let array3 = [1, 2, 3];
let array4 = [1, 2, 3, 4];

class App extends React.Component {

  printArray = (array) => {
    let str = ''
    let end = array.length - 1
    let i = 0
    for (i = 0; i < end; i++) {
      str += array[i] + ', ' 
    }
    str += array[end]
    return (<div>[{str}]</div>)
  } 

  // testAlgo = (array) => {
  //   array.map(element =>  <li>{element}</li>  )
  // }

  // testAlgo2 = (array) => {
  //   array.forEach(element => console.log(element))
  // }

  // testAlgo3 = (array) => {
  //   let ans = 0
  //   array.forEach(element => {
  //     ans += element
  //   })
  //       return (<li>{ans}</li>)
  // }

  example1 = (array) => {
    let sum = 0;
    let product = 1;
    let i = 0
    let j = 0
    let x = 0
    for (i = 0; i < array.length; i++) {
      sum += array[i]
      x++
    } 
    for (j = 0; j < array.length; j++) {
      product *= array[j]
      x++
    }
    console.log(sum, product)
    return ( 
      <div>
        <div>Sum: {sum}</div>
        <div>Product: {product}</div>
        <div># of calcs: {x}</div>
      </div> 
    )
  }

  example2 = (array) => {
    let i = 0;
    let j = 0;
    let x = 0;
    for (i = 0; i < array.length; i++) {
      for (j = 0; j < array.length; j++) {
        console.log(`${array[i]}` + ',' + `${array[j]}`)
        x++        
      }
    }
    return (<div># of calcs: {x}</div>)
  }


  render() {
    return (
      <div className="text-box1">
        <div className="array1">
          <ul>
            <b>N=1</b> Array Elements: {this.printArray(array1)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array1)} 
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array1)}
          </ul>
        </div>        
        <div className="array2">
          <ul>
            <b>N=2</b> Array Elements: {this.printArray(array2)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array2)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array2)}
          </ul>
        </div>
        <div className="array3">
          <ul>
            <b>N=3</b> Array Elements: {this.printArray(array3)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array3)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array3)}
          </ul>
        </div>
      </div>
      // <div className="text-box2">
      //   <ul>
      //     Array Elements: {this.printArray(array2)}
      //   </ul>
      // </div>
    )
  }
}
export default App 