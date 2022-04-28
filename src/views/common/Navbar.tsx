import { Layout } from './Layout'

export const Navbar = () => {
  return (
    <div className="h-12 sm:h-14">
      <div className="fixed top-0 w-screen h-12 sm:h-14 border-b border-gray-300 bg-blue-100">
        <Layout className="flex w-full h-full items-center">
          <h1 className="font-bold text-blue-600">FLOW</h1>
          <div className="flex items-center flex-1 px-4 justify-center">
            <a className="mx-2 w-16">Tab1</a>
            <a className="mx-2 w-16">Tab1</a>
            <a className="mx-2 w-16">Tab3</a>
          </div>
          <div>
            <button className="w-20 rounded-full border-2 border-blue-600 text-blue-600">
              CTA
            </button>
          </div>
        </Layout>
      </div>
    </div>
  )
}
