import React, { useEffect, useState } from 'react';
import { useParms } from 'react-router-dom';
import Axios from 'axios';

const MyComponent = () => {
  const { id } = useParms();
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const fetchCategry = async () => {
      try {
        const response = await Axios.get(`/api/categories/${id}`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };
    fetchCategry();
  }, [id]);
  return (
    <div>
      {category ? (
        <table>
          <tbody>
            <tr><td>{category.name}</td></tr>
            <tr><td>{category.location}</td></tr>
            <tr><td>{category.capital}</td></tr>
            <tr><td>{category.date}</td></tr>
            <tr><td>{category.sales}</td></tr>
            <tr><td>{category.contracts}</td></tr>
            <tr><td>{category.department}</td></tr>
            <tr><td>{category.manager}</td></tr>
            <tr><td>{category.lmanagerkana}</td></tr>
            <tr><td>{category.url}</td></tr>
          </tbody>
        </table>
      ) : (
        <p>データが見つかりません。</p>
      )}
    </div>
  );
};

export default MyComponent;
