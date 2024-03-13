import React from "react";

const ComplexDashboard = ({ 
  children,
  users,
  revenue,
  notifications
}: { 
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode
}) => {
  return (
    <>
      <div>{children}</div>
      <div className="flex justify-center place-items-center">
        <div className="flex flex-col">
          <div className="min-h-50 w-[30%]">{users}</div>
          <div className="min-h-50 w-[30%]">{revenue}</div>
        </div>
        <div className="flex flex-1 min-h-96 w-[50%]">{notifications}</div>

      </div>
    </>
  );
};

export default ComplexDashboard;
