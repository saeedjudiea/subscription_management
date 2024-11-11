// import { useState, useEffect } from 'react';
// import Dashboard from '../components/Dashboard';
// import SubscriptionTable from '../components/SubscriptionTable';
// import AddSubscription from '../components/AddSubscription';

// export default function Home() {
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [buttonSHow, setButtonSHow] = useState(false);

//   useEffect(() => {
//     fetch('/api/subscriptions')
//       .then((res) => res.json())
//       .then((data) => setSubscriptions(data));
//   }, []);

//   const handleAddSubscription = async (newSubscription) => {
//     const res = await fetch('/api/subscriptions', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newSubscription),
//     });
//     if (res.ok) {
//       const data = await res.json();
//       setSubscriptions([...subscriptions, data]);
//     } else {
//       const error = await res.json();
//       throw new Error(error.error);
//     }
//   };

//   const handleUpdateSubscription = async (updatedSubscription) => {
//     const res = await fetch(`/api/subscriptions/${updatedSubscription.id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(updatedSubscription),
//     });
//     const data = await res.json();
//     setSubscriptions(subscriptions?.map(sub => sub.id === data.id ? data : sub));
//   };

//   const handleDeleteSubscription = async (id) => {
//     await fetch(`/api/subscriptions/${id}`, {
//       method: 'DELETE',
//     });
//     setSubscriptions(subscriptions.filter(sub => sub.id !== id));
//   };

//   const handleRenewSubscription = async (id, renewData) => {
//     const existingSubscription = subscriptions.find(sub => sub.id === id);
//     if (existingSubscription) {
//       const updatedSubscription = {
//         ...existingSubscription,
//         startDate: renewData.startDate,
//         endDate: renewData.endDate,
//         price: renewData.price,
//       };
//       await handleUpdateSubscription(updatedSubscription);
//     }
//   };

//   const dashboardData = [
//     { title: 'Total Subscriptions', value: subscriptions?.length },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <Dashboard data={dashboardData} />
//       <div className="mt-8">
//       {/* <button onClick={()=>setButtonSHow(!buttonSHow)}>New</button> */}
//         {buttonSHow ? <>
//       <button className="bg-red-500 text-white px-4 py-2 mb-3 rounded" onClick={()=>setButtonSHow(!buttonSHow)}>Close</button>
//           <AddSubscription onAdd={handleAddSubscription} setButtonSHow /> 
//           </>
//           : <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>setButtonSHow(!buttonSHow)}>New Subscriptions</button>}
       
//       </div>
//       <div className="mt-8">
//         <SubscriptionTable 
//           subscriptions={subscriptions} 
//           onUpdate={handleUpdateSubscription} 
//           onDelete={handleDeleteSubscription} 
//           onRenew={handleRenewSubscription} 
//         />
//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import SubscriptionTable from '../components/SubscriptionTable';
import AddSubscription from '../components/AddSubscription';

export default function Home() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [buttonSHow, setButtonSHow] = useState(false);

  useEffect(() => {
    fetch('/api/subscriptions')
      .then((res) => res.json())
      .then((data) => setSubscriptions(data));
  }, []);

  const handleAddSubscription = async (newSubscription) => {
    const res = await fetch('/api/subscriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSubscription),
    });
    if (res.ok) {
      const data = await res.json();
      setSubscriptions([...subscriptions, data]);
    } else {
      const error = await res.json();
      throw new Error(error.error);
    }
  };

  const handleUpdateSubscription = async (updatedSubscription) => {
    const res = await fetch(`/api/subscriptions/${updatedSubscription.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedSubscription),
    });
    const data = await res.json();
    setSubscriptions(subscriptions?.map(sub => sub.id === data.id ? data : sub));
  };

  const handleDeleteSubscription = async (id) => {
    await fetch(`/api/subscriptions/${id}`, {
      method: 'DELETE',
    });
    setSubscriptions(subscriptions.filter(sub => sub.id !== id));
  };

  const handleRenewSubscription = async (id, renewData) => {
    const existingSubscription = subscriptions.find(sub => sub.id === id);
    if (existingSubscription) {
      const updatedSubscription = {
        ...existingSubscription,
        startDate: renewData.startDate,
        endDate: renewData.endDate,
        price: renewData.price,
      };
      await handleUpdateSubscription(updatedSubscription);
    }
  };

  const activeSubscriptions = subscriptions.filter(sub => new Date(sub.endDate) > new Date());
  const expiringSoonSubscriptions = activeSubscriptions.filter(sub => {
    const endDate = new Date(sub.endDate);
    const currentDate = new Date();
    const diffTime = endDate - currentDate;
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths <= 3;
  });
  const totalActiveCost = activeSubscriptions.reduce((acc, sub) => acc + sub.price, 0);
  const totalHistoricalCost = subscriptions.reduce((acc, sub) => {
    const historyCost = sub.history.reduce((historyAcc, historyItem) => historyAcc + historyItem.price, 0);
    return acc + sub.price + historyCost;
  }, 0);

  const dashboardData = [
    { title: 'Total Active Subscriptions', value: activeSubscriptions.length },
    { title: 'Expiring in 3 Months', value: expiringSoonSubscriptions.length },
    { title: 'Total Active Cost', value: totalActiveCost },
    { title: 'Total Historical Cost', value: totalHistoricalCost },
  ];

  return (
    <div className="container mx-auto p-4">
      <Dashboard data={dashboardData} />
      <div className="mt-8">
        {buttonSHow ? (
          <>
            <button className="bg-red-500 text-white px-4 py-2 mb-3 rounded" onClick={() => setButtonSHow(!buttonSHow)}>Close</button>
            <AddSubscription onAdd={handleAddSubscription} setButtonSHow={setButtonSHow} />
          </>
        ) : (
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setButtonSHow(!buttonSHow)}>New Subscriptions</button>
        )}
      </div>
      <div className="mt-8">
        <SubscriptionTable
          subscriptions={subscriptions}
          onUpdate={handleUpdateSubscription}
          onDelete={handleDeleteSubscription}
          onRenew={handleRenewSubscription}
        />
      </div>
    </div>
  );
}
