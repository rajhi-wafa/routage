import React from 'react'
import{Link} from 'react-router-dom'
const navbar = () => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/category"><button>Category</button></Link>
            <Link to="/porduct"><button>Product</button></Link>
            <Link to="/admin"><button>Admin</button></Link>
            
        </div>
    )
}

export default navbar

