import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const EditDogTag = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['user']);
  // const [newInfo, setnewInfo] = useCookies(['user']);
	const [updateData, setupdateData] = useState({
	user_id: cookies.userId,
	email: "",
	})

	const updateInfo = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.put('http://localhost:2000/user', {updateData})

      console.log("*****Updating", updateData);

      if (updateData) {
        setupdateData(res.data);
      }
      const success = res.statusCode === 200;
      if (success) {
        console.log('front end updateInfo working');
        res.send('Information updated successfully!')
      }
    }
    catch (error) {
      console.log(error);
    }
  }
    
	return (
		<div>
			<h1>Welcome (Bark) To Your Dog Tag</h1>

			<form
				className="dogTag"
        onSubmit={updateInfo}
			>
				<h3>Update Owner Information</h3> 
        
       <label for="currentName"> Name</label>
        	<input
					type="firstname"
					name="firstname"
					placeholder="First name"
          onChange={(e) => setupdateData(e.target.value)}
          />
        <br/>
        <label >Current Email</label>
        <input
					type="currentEmail"
					name="currentEmail"
					placeholder="Current email"
          onChange={(e) => setupdateData(e.target.value)}
				/>

        <br/>
        <label >New Email</label>
				<input
					type="email"
					name="email"
					placeholder="new email"
				/>
        <input
        id="errorButton2"
        type="submit"
      />

				<h3>Dog Information</h3>
				<input
					type="name"
					name="name"
					placeholder="name"
				/>
			
				<input
					type="name"
					name="name"
					placeholder="Last name"
				/>
        <input
						id="errorButton2"
						type="submit"
					/>
    
			</form>
		</div>
	);
};

export default EditDogTag;
