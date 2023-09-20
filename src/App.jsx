import { 
  Nav,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer
 } from "./sections/index";

const App = () => (
  <main id="Nav" className="relative">
    <Nav />
    <section id="Hero" className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section id="PopularProducts" className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;