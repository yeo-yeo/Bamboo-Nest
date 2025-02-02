import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white text-primaryBlue py-8">
      <div className="mx-auto px-6 flex justify-between items-center">
        {/* Brand Name on the left side */}
        <div className="lg:text-2xl font-bold">Bamboo Nest</div>

        {/* Three columns on the right side */}
        <div className="flex space-x-8">
          {/* Column 1 */}
          <div>
            <h3 className="lg:text-lg font-semibold mb-4">General</h3>
            <ul className="list-none">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/account">Account</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="lg:text-lg font-semibold mb-4">Items</h3>
            <ul className="list-none">
              <li>
                <Link href="/search">Search</Link>
              </li>
              <li>
                <Link href="/upload">Sell</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="lg:text-lg font-semibold mb-4">Help</h3>
            <ul className="list-none">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
