import React from 'react';

function Withdraw (){
    return (
        <><nav className="navbar" style={{cursor:'alias', border: '5px solid yellow', backgroundColor: 'pink' }}>
            <h3>Balance: 500,000$</h3>
            <div className="links" >
                <a className='account' href="/Deposit">Deposit</a>
            </div>
        </nav><div className='center' style={{textAlign: 'center', display:'block', border:'5px solid yellow', backgroundColor:'pink'}}>
               <p>Balnace = 0 <br />
                Withdraw = balance - input</p> 
                <input type="button" className='pointer' style={{cursor:'pointer'}} value="Sumbit" />
            </div></> 
    )
}
export default Withdraw;