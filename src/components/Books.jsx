import React from 'react';
import m from './Books.module.css';

export const Books = (props) => {

    return (
        <div className={m.header}>
            {props.books.map(b => <div key={b.id} className={m.allProduct}>
                <section>
                    <div className={m.product}>
                        <h2>{b.ProductEntity}</h2>
                    </div>
                    <div className={m.product}>
                        <img className={m.photoProduct} src={b.PhotoBook} alt="foto" />
                    </div>
                    <div className={m.product}>
                        <h3>{b.Name}</h3>
                    </div>
                    <div className={m.product}>
                        <h4>{b.Description}</h4>
                    </div>
                    <div className={m.product}>
                        <div>{b.Price}</div>
                    </div>
                    <div className={m.product}>
                        <button className={m.addBook}>Add Book</button>
                    </div>
                    <div className={m.product}>
                        <button className={m.buttonDelete} >Delete Book</button>
                    </div>
                </section>

            </div>)}
        </div>
    );
};


