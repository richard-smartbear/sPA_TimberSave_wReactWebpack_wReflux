import React, { Component } from "react";
import Soln from "../presentational/soln";
import { setCurrentSoln } from "../../actions/actions-solution";

export default class SolnsContainer extends Component {
  constructor() {
    super();
    this.state={
      solns:[
        {
          id:1,
          name:'soln1',
          isListedStructure:true,
          isExposedFeature:true,
          forMaterialGrade:'AA',
          archScore:[2,3,2],
          carbScore:[5,5,5],
          priceScore:[10,9,9]
        },{
          id:5,
          name:'soln5',
          isListedStructure:true,
          isExposedFeature:true,
          forMaterialGrade:'AA',
          archScore:[9,10,9],
          carbScore:[4,5,5],
          priceScore:[3,4,3]
        }
      ],
      archVal:5,
      carbVal:3,
      priceVal:1,
    }
    this.getSolnScoreAndSort = this.getSolnScoreAndSort.bind(this);
    this.getRatio = this.getRatio.bind(this);
    this.getSolnsList = this.getSolnsList.bind(this);
  }

  //Not final place for getEachSolnScoreLogic... Will be both here and on slider change function
  componentWillMount(){
    let getSolns = [
      {
        id:1,
        name:'soln1',
        isListedStructure:true,
        isExposedFeature:true,
        forMaterialGrade:'AA',
        archScore:[2,3,2],
        carbScore:[5,5,5],
        priceScore:[10,9,9]
      },{
        id:5,
        name:'soln5',
        isListedStructure:true,
        isExposedFeature:true,
        forMaterialGrade:'AA',
        archScore:[9,10,9],
        carbScore:[4,5,5],
        priceScore:[3,4,3]
      },{
        id:7,
        name:'soln7',
        isListedStructure:true,
        isExposedFeature:true,
        forMaterialGrade:'AA',
        archScore:[1,1,1],
        carbScore:[10,10,9],
        priceScore:[1,1,1,]
      }
    ]
    //Fire Appropiate Action
    //setCurrentSoln();
    this.getSolnScoreAndSort();
  }

 // componentWillReceiveProps(){
    //Retrieve the updated Props from store
 //   this.getSolnScoreAndSort();
 // }

  getSolnScoreAndSort(){
    let {solns,archVal,carbVal,priceVal} = this.state;
    solns.map((x)=>{
          let sumArchScore=this.getRatio(archVal,x.archScore),
          sumCarbScore=this.getRatio(carbVal,x.carbScore),
          sumPriceScore=this.getRatio(priceVal,x.priceScore);
          //Save to each object it's new total score
          x.sumTotal=sumArchScore+sumCarbScore+sumPriceScore;
    })

    //Now sort solns objArr by highest soln.sumTotal value
    let newSolns = solns.sort((a,b)=>parseFloat(b.sumTotal) - parseFloat(a.sumTotal))
    this.setState({solns:newSolns})
  }

  getRatio(valToAssess,valScoresArr){
    const { archVal, carbVal, priceVal } = this.state;
    let totalVal = archVal+carbVal+priceVal;

    return ((valToAssess/totalVal)*(valScoresArr.reduce((total,itemVal)=>total+itemVal)/valScoresArr.length))
  }

  getSolnsList(solnsArr){
    return(
      <ol>{
        solnsArr.map(x => <Soln thisSoln={x}/>)
      }</ol>
    );
  }

  render() {
    const { solns, archVal, carbVal, priceVal } = this.state;
    return (
      <div>
        <h2>Top Soln:</h2>
        <Soln thisSoln={ solns[0] }/>
        <hr/>
        <h2>All Solns In Order:</h2>
        { this.getSolnsList( solns ) }
      </div>
    );
  }
}
