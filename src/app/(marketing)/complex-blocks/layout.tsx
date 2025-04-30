export default function ComplexAuthLayout({
    children,
    analytics,
    notifications,
    users,
  }: {
    children: React.ReactNode;
    analytics: React.ReactNode;
    notifications: React.ReactNode;
    users: React.ReactNode;
  }) {
    const isLoggedIn = true;
    return isLoggedIn ? (
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{analytics}</div>
            <div>{notifications}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{users}</div>
        </div>
      </div>
    ) : (
      users
    );
  }