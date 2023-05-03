import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {const [active, setActive] = useState(false);

	const onDeleteProduct = Product => {
		const results = allProducts.filter(
			item => item.id !== Product.id
		);

		setTotal(total - Product.precio * Product.cantidad);
		setCountProducts(countProducts - Product.cantidad);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

  
  return (
    
     <div>
      <Link to="/">
       <p className="centrado letrawhite  titulo fondoRosa redondeado interlineadoGrande  menu letra posicionarriba">
          <strong>SO TRENDD</strong>
        </p>
      </Link>
      <div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='icon-cart'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(Product => (
									<div className= 'cart-product' key={Product.id} >
										<div className='info-cart-product' >
											<span className='cantidad-producto-carrito'>
												{Product.cantidad}
											</span>
											<p className='titulo-producto-carrito'>
												{Product.name}
											</p>
											<span className='precio-producto-carrito'>
												${Product.precio}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(Product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
      <div>
      <nav id="navbarr" className="navbar navbar-dark fixed-top displaynone">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">

            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                <p id="nav-link" className="nav-link active" aria-current="page" >WHAT'S NEW</p>
              </li>
              <li className="nav-item">
              <Link to="/Zapatos" id="nav-link" className="nav-link">ZAPATOS </Link>
              </li>
              

                <li className="nav-item">
                <Link to="/Carteras" id="nav-link" className="nav-link">CARTERAS </Link>
                </li>
                <li className="nav-item">
                <Link to="/Accesorios" id="nav-link" className="nav-link">ACCESORIOS </Link>
                </li>
                <li className="nav-item">
                <Link to="/Springseason" id="nav-link" className="nav-link">SPRING SEASON </Link>
                  </li>

            </ul>

            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button id="fondo" className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>

  );
};

export default Header;
