import React from 'react';


function Deposit() {
    return (
        <><nav className="navbar" style={{ border: '5px solid yellow', backgroundColor: 'pink' }}>
           
                <h3>Balance: 500,000$</h3>
                <div className="links">
                    <a className='account' href="/Withdraw">Withdraw</a>
                </div>
            
        </nav><div className='center' style={{ textAlign: 'center', display: 'block', border: '5px solid yellow', backgroundColor: 'pink' }}>
                Balnace = 0 <br />
                Deposit = balance + input
            </div></>
    )
}
export default Deposit;