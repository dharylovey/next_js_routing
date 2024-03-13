import Card from "@/components/Card";
import React from "react";
import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div className="flex">
        <p> Archived Notification</p>
        <Link href={"/complex-dashboard"}>Default</Link>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
