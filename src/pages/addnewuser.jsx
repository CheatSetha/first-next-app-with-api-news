import { useState } from 'react';
import { useRouter } from 'next/router';

function AddUserForm() {
  const [userData, setUserData] = useState({
    name: '',
    gender: 'male',
    isStudent: false,
    studentCardId: '',
  });
  const rounter = useRouter();
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
    

      console.log('User added successfully:', data);
      rounter.push('/admin')
      
  
    } catch (error) {
      console.error('Error adding user:', error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-[90%] md:w-[50%] mx-auto  my-5 p-3 rounded-lg shadow-2xl'>
      <label htmlFor="name">Name</label> <br />
      <input
      className='w-full p-3 rounded-lg shadow-2xl bg-gray-400 mb-3 bg-opacity-50 '
        type="text"
        id="name"
        name="name"
        value={userData.name}
        onChange={handleInputChange}
        required
     
      />

      <label htmlFor="gender">Gender : </label>
      <select
        className='bg-transparent border-none mb-3'

        id="gender"
        name="gender"
        value={userData.gender}
        onChange={handleInputChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        
      </select>
      <br />

      <label htmlFor="isStudent">
        <input
          className='mb-3 '
          type="checkbox"
          id="isStudent"
          name="isStudent"
          checked={userData.isStudent}
          onChange={handleInputChange}
        />
        Are you a student?
      </label>
      

      {userData.isStudent && (
        <>
        <br />
        <label className='mb-3' htmlFor="studentCardId">
          Student Card ID
        </label> <br />
        <input
             className='w-full p-3 rounded-lg shadow-2xl bg-gray-400 bg-opacity-50 mb-3'
            type="text"
            id="studentCardId"
            name="studentCardId"
            value={userData.studentCardId}
            onChange={handleInputChange}
          />
        </>
      )}
      <br />

      <button className='p-2 w-full bg-blue-700 text-white rounded-lg' type="submit">Submit</button>
    </form>
  );
}

export default AddUserForm;
