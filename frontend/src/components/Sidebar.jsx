import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const links = [

    {
      name:"Dashboard",
      path:"/dashboard"
    },

    {
      name:"Appointments",
      path:"/appointment"
    },

    {
      name:"Queue",
      path:"/queue"
    },

    {
      name:"SOS",
      path:"/sos"
    },

    {
      name:"Admin",
      path:"/admin"
    }

  ];

  return (

    <aside className="sidebar">

      <div className="brand">

        <h2>AETHER</h2>

        <span>HEALTH</span>

      </div>

      <nav>

        {
          links.map(link => (

            <Link

              key={link.path}

              to={link.path}

              className={
                location.pathname ===
                link.path

                ? "nav-item active"

                : "nav-item"
              }

            >

              {link.name}

            </Link>

          ))
        }

      </nav>

    </aside>

  );

}