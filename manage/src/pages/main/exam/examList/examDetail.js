import React,{useEffect,useState} from 'react'
import {connect} from "dva"
import styles from "../addExam.scss"
function examDetail (props) {
    let [detail,setDetail]=useState({})
    useEffect(()=>{
        let id=props.location.search.split("=")[1]
        // let examList=JSON.parse(sessionStorage.getItem("examList"))
         
    },[])
    return (
        <div>
            <h2>试卷详情</h2>
            <div className={styles.detail_content}>
                <div className={styles.content_left}>
                    <div>
                        {
                           props.detailData.map((item,index)=>{
                                return <div key={index}>
                                    <h4>{index+1}:{item.title}</h4>
                                    <div>     
                                        {/* <ReactMarkdown source={item.questions_stem}/> */}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                {/* <div className={styles.content_right}></div> */}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
   
    return {
       
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        getDetail(payload) {
            dispatch({
                type: "exam/getDetail",
                payload,
            })
        },
       
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(examDetail)