import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useGlobalContext } from '../Components/utils/global.context';

const Detail = () => {
	const {state} = useGlobalContext();
	const { id } = useParams();
	const [ dentist, setDentist ] = useState(null);
	const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	
	useEffect(() => {
		if (!loading && !error) {
			setDentist(data);
		}
		console.log(dentist);
	}, [id, data, loading, error]);

	if (!dentist) {
		return <div className="loading-message">Loading...</div>
	}

	if (error) {
		return <div className="error-message">{error}</div>;
	}
	
	return (
		<div className={`details ${state.theme === "dark" ? "dark" : "light"}`}>
			<div className='detail-container'>
				<h1 className="detail-title">Detail Dentist { dentist.id }</h1>
				<div className="detail-info">
					<h2>{ dentist.name }</h2>
					<p>Email: { dentist.email }</p>
					<p>Telefono: { dentist.phone }</p>
					<p>Sitio Web: { dentist.website }</p>
				</div>
			</div>
		</div>
	);
	};

export default Detail;