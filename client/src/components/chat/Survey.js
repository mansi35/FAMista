import React, { useState } from 'react'
import '../../css/Survey.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import db from '../../firebase';
import {useAuth} from "../../contexts/AuthContext";

function Survey({handleClose, productImage, productId, productName, userId}) {
	const {currentUser} = useAuth();
    const [quality, setQuality] = useState(0);
    const [fitting, setFitting] = useState(0);
    const [valMoney, setValMoney] = useState(0);
    const [material, setMaterial] = useState(0);
    const [feedback, setFeedback] = useState('');

    const submitFeedback = () => {
		db.collection('users').doc(userId).collection('surveyResults').doc(productId).set({
			productName: productName,
			productImage: productImage,
			productId: productId
		})

		db.collection('users').doc(userId).collection('surveyResults').doc(productId).collection('reviews').doc(currentUser.uid).set({
			productQuality: quality,
			productFitting: fitting,
			productValMoney: valMoney,
			productMaterial: material,
			productFeedback: feedback
		})
		handleClose();
    }


    return (
            <div class="feedback">
            <img src={productImage} height="200" alt="product" />
            <br />
            <br />
            <Box component="fieldset" mb={3} borderColor="transparent">
				<Typography component="legend">Please rate the quality of this product: </Typography>
				<Rating
					name="simple-controlled"
					value={quality}
					onChange={(event, newValue) => {
					console.log(newValue);
					setQuality(newValue);
					}}
				/>
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent">
				<Typography component="legend">Please rate this product on the basis of it's comfortableness and fitting: </Typography>
				<Rating
					name="simple-controlled"
					value={fitting}
					onChange={(event, newValue) => {
					console.log(newValue);
					setFitting(newValue);
					}}
				/>
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent">
				<Typography component="legend">Is it a good value for money? </Typography>
				<Rating
					name="simple-controlled"
					value={valMoney}
					onChange={(event, newValue) => {
					console.log(newValue);
					setValMoney(newValue);
					}}
				/>
            </Box>

            <Box component="fieldset" mb={3} borderColor="transparent">
				<Typography component="legend">Is the material and color of this product good? </Typography>
				<Rating
					name="simple-controlled"
					value={material}
					onChange={(event, newValue) => {
					console.log(newValue);
					setMaterial(newValue);
					}}
				/>
            </Box>

            <label>
				What is you overall satisfaction with the product? <br />
				<input onChange={(e) => setFeedback(e.target.value)} type="text" value={feedback} placeholder="Write feedback" />
            </label>
            <br />

            <button onClick={submitFeedback} type="submit" className="register__register">Submit</button>
            </div>
    )
}

export default Survey
