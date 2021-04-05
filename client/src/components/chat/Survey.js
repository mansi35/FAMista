import React from 'react'
import '../../css/Survey.css'

function Survey({handleClose, productImage}) {
    return (
            <div class="feedback">
            <img src={productImage} height="200" alt="product" />
            <br />
            <p>Dear Customer,<br />
            Thank you for getting your car services at our workshop. We would like to know how we performed. Please spare some moments to give us your valuable feedback as it will help us in improving our service.</p>
             
            <h4>Please rate your service experience for the following parameters</h4>
             
            <form method="post" action="#action-url">
            <label>1. Your overall experience with us ?</label><br />
              
            <span class="star-rating">
              <input type="radio" name="rating1" value="1" /><i></i>
              <input type="radio" name="rating1" value="2" /><i></i>
              <input type="radio" name="rating1" value="3" /><i></i>
              <input type="radio" name="rating1" value="4" /><i></i>
              <input type="radio" name="rating1" value="5" /><i></i>
            </span>
             
              <div class="clear"></div> 
              <hr class="survey-hr" />
            <label>2. Friendliness and courtesy shown to you while recieving your vehicle</label><br />
            <span class="star-rating">
              <input type="radio" name="rating2" value="1" /><i></i>
              <input type="radio" name="rating2" value="2" /><i></i>
              <input type="radio" name="rating2" value="3" /><i></i>
              <input type="radio" name="rating2" value="4" /><i></i>
              <input type="radio" name="rating2" value="5" /><i></i>
            </span>
             
             
              <div class="clear"></div> 
              <hr class="survey-hr" />
            <label>3. Friendliness and courtesy shown to you while delivery of your vehicle</label><br/><br/>
              <div style={{color:"grey"}}>
                <span style={{float:"left"}}>
                 POOR
                </span>
                <span style="float:right">
                  BEST
                </span>
                
              </div>
            <span class="scale-rating">
              <label value="1">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="2">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="3">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="4">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="5">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="6">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="7">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="8">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="9">
              <input type="radio" name="rating" />
              <label style="width:100%;"></label>
              </label>
              <label value="10">
              <input type="radio" name="rating" value="10" />
              <label style="width:100%;"></label>
              </label>
            </span>
             
              <div class="clear"></div> 
              <hr class="survey-hr" /> 
            <label for="m_3189847521540640526commentText">4. Any Other suggestions:</label><br/><br/>
            <textarea cols="75" name="commentText" rows="5" style="100%"></textarea><br />
            <br />
              <div class="clear"></div> 
            <input style="background:#43a7d5;color:#fff;padding:12px;border:0" type="submit" value="Submit your review" /> 
            </form>
            </div>
    )
}

export default Survey
