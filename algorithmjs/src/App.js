import React from 'react';
import './App.css';

let array1 = [1];
let array2 = [1, 2];
let array3 = [1, 2, 3];
let array4 = [1, 2, 3, 4];
let array5 = [1, 2, 3, 4, 5];
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

class App extends React.Component {

  printArray = (array) => {
    let str = ''
    let end = array.length - 1
    let i = 0
    for (i = 0; i < end; i++) {
      str += array[i] + ', ' 
    }
    str += array[end]
    return (<div>Array: [{str}]</div>)
  } 

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
    if (sum > 100000 || product > 100000) {
      return (
        <div>
          <div># of calcs: {x}</div>
        </div>
      )
    } else {   
    return ( 
      <div>
        <div>Sum: {sum}</div>
        <div>Product: {product}</div>
        <div># of calcs: {x}</div>
      </div> 
    )}
  }

  example2 = (array) => {
    let i = 0;
    let j = 0;
    let x = 0;
    let pairsArray = [];
    for (i = 0; i < array.length; i++) {
      for (j = 0; j < array.length; j++) {
        pairsArray.push(`${array[i]}` + ',' + `${array[j]}`)
        x++        
      }
    }
  //  console.log(pairsArray)
    return (<div># of calcs: {x}</div>)
  }

  example3 = (array) => {
    let i = 0;
    let j = 0;
    let x = 0;
    let pairsArray = [];
    for (i = 0; i < array.length; i++) {
      for (j = i + 1; j < array.length; j++) {
        pairsArray.push(`${array[i]}` + ',' + `${array[j]}`)
        x++        
      }
    }
    // console.log(pairsArray)
    return (<div># of calcs: {x}</div>)
  }

  example4 = (arrayA, arrayB) => {      // Each unit of work is O(1),
    let i = 0;                          // total amount is dependent upon TWO inputs.
    let j = 0;                          // so: a = arrayA.length | b = arrayB.length 
    let x = 0;                          // runtime = O(ab)
    let finalArray = [];
    for (i = 0; i < arrayA.length; i++) {
      for (j = 0; j < arrayB.length; j++) {
        if (arrayA[i] < arrayB[j]) {
          finalArray.push(arrayA[i] + ',' + arrayB[j])
          x++
        }
      }
    }
  //  console.log(finalArray)
    return (<div># of calcs: {x}</div>)
  }

  example5 = (arrayA, arrayB) => {      // Inner unit of work is still constant,
    let i = 0;                          // even with 100000 repetitions.
    let j = 0;                          // so: a = arrayA.length | b = arrayB.length 
    let k = 0;                          // runtime = O(ab)
    let x = 0;                        
    let finalArray = [];
    for (i = 0; i < arrayA.length; i++) {
      for (j = 0; j < arrayB.length; j++) {
        for (k = 0; k < 100000; k++) {
          finalArray.push(arrayA[i] + ',' + arrayB[j])
          x++
        }
      }
    }
  //  console.log(finalArray)
    return (<div># of calcs: {x}</div>)
  }

  example6 = (array) => {
    let i = 0;
    let x = 0;
    for (i = 0; i < array.length / 2; i++) {
      let other = array.length - i - 1;
      let temp = array[i];
      array[i] = array[other];
      array[other] = temp;
      x++;
    }
    console.log(array)
    return (<div># of calcs: {x}</div>)
  }


  render() {
    return (
      <div className="text-box1">
        <div className="array1">
          <ul>
            <b>N=1</b>{this.printArray(array1)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array1)} 
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array1)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array1)}
          </ul>
        </div>        
        <div className="array2">
          <ul>
            <b>N=2</b>{this.printArray(array2)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array2)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array2)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array2)}
          </ul>
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array2)}
          </ul>
        </div>
        <div className="array3">
          <ul>
            <b>N=3</b>{this.printArray(array3)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array3)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array3)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array3)}
          </ul>
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array3)}
          </ul>
        </div>
        <div className="array4">
          <ul>
            <b>N=4</b>{this.printArray(array4)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array4)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array4)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array4)}
          </ul>
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array4)}
          </ul>
        </div>
        <div className="array5">
          <ul>
            <b>N=5</b>{this.printArray(array5)}
            <br></br>
            Example 1: <i>O(N)</i>{this.example1(array5)} 
          </ul>
          <ul>
      
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array5)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array5)}
          </ul>     
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array5)}
          </ul>   
        </div>
        <div className="array6">
          <ul>
            <b>N=49</b>
            <br></br>  
          </ul>
          <ul>
            Example 1: <i>O(N)</i>{this.example1(array6)} 
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array6)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array6)}
          </ul>        
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array6)}
          </ul>
        </div>
        <div className="array7">
          <ul>
            <b>N=50</b>
            <br></br>  
          </ul>
          <ul>
            Example 1: <i>O(N)</i>{this.example1(array7)} 
          </ul>
          <ul>
            Example 2: <i>O(N²)</i> {this.example2(array7)}
          </ul>
          <ul>
            Example 3: <i>O(N²)</i> {this.example3(array7)}
          </ul>        
          <ul>
            Example 6: <i>O(N)</i> {this.example6(array7)}
          </ul>
        </div>
      </div>
    )
  }
}
export default App 