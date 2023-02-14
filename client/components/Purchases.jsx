import React, { useEffect, useState } from "react"
import DownloadButton from "./DownloadButton"
import Link from 'next/link';

export default function Purchases({user, setUser}) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
            setUser(data)});
            }});
        }, [setUser]);

        useEffect(() => {
            setPurchases(user.purchased);
        }, [user]);

        return (
            <>
            <div>
                <div className="mb-8 text-center">
                    {user.email == "Guest" ? <><h1>You're currently not signed in.</h1><h1> You'll need to make an <Link href="/login" className="underline">account</Link> to save your cart and purchases. </h1></> : null}
                </div>
                <h1 className="font-bold text-4xl pb-2">
                    Purchases
                </h1>
                <div>{purchases.length > 0 ? (purchases.map((purchase, index)=> {
                        return (
                            <div key={index}>
                                <li>{purchase.instrumental}</li>
                                    <ul>{purchase.contract_info}</ul>
                                <DownloadButton name={purchase.instrumental} blobUrl={`/api/${purchase.file}`} />
                            </div>
                        );
                    })) : null
                    }</div>
                    <div className='py-5 mr-10'>
                </div>
            </div>
        </>
    )
}