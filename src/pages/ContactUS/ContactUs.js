import React from "react";
import contactImg from "../../assets/ContactUs.jpg";
import faq from "../../assets/FAQ.jpg";

import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contact-Section text-center bg-dark ">
      <div>
        <img src={contactImg} alt=""  className=" w-100 " />
      </div>

      {/* Contact Information Start    */}

      <div className="row row-cols-1 row-cols-md-4  container mx-auto mb-5  mt-5 justify-content-center">
        <div className="card  h-60 shadow p-3  me-5  contact border border-light rounded">
          <h4>
            Email Here <hr />
            saikat@gmail.com
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Location Here <hr />
            Dhanmondi , Dhaka-1630
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Call Here <hr />
            +880196-12644444
          </h4>
        </div>
      </div>

      {/* Contact Information End    */}

      {/*FAQ Start    */}

      <div className="container">
       

        <div className="container d-lg-flex">
          <div className="mb-3 col-md-6 mt-5">
            <img src={faq} width="90%" className="h-100 rounded"  alt="" />
          </div>

          <div className="my-auto col-md-6 ms-4 ">
            <div className="accordion" id="accordionExample">
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What are the most surreal places to visit?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Some of the strangest places on earth are also the most
                      sublime: from the UFO-like dragon's blood trees in Yemen
                      to a rainbow-colored hot spring in Yellowstone to a bridge
                      in Germany that looks like a leftover prop from Lord of
                      the Rings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Do you have to be rich to travel the world?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The beauty of travel is that it’s accessible to everyone,
                      in some form. You don't have to go far to experience a new
                      culture. Plus there are several ways to make most flights
                      affordable, whether by being flexible, searching on new
                      websites like Skypicker and Fareness, or just by planning
                      ahead. Know the best time to book a flight: 57 days in
                      advance for domestic flights, 117 for international. Then
                      again, you could just make traveling the world your
                      9-to-5.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are some common items savvy travelers bring with them
                    (that less-savvy travelers don’t)?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Don’t forget a small power strip—ideal for sharing a
                      crowded outlet in an airport, and a simple way to keep all
                      devices close by once at a hotel. (Combine that with a
                      Zolt—which powers a laptop and two devices with a charger
                      the size of a lipstick—and it’s even handier.) Keep a
                      photograph of your luggage and passport on your
                      smartphone; lose either of them, and you’ll be grateful
                      for the reference. Pack a scarf—always. And since calling
                      Nespresso coffee is an insult to baristas everywhere, the
                      best in-room alternate is the Aeropress, a nifty gizmo
                      that’s portable, light, and makes killer morning joe
                      almost anywhere.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What’s it really like to be a travel writer?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      "For every beautiful beach hideaway, there’s been a missed
                      flight or delay; for every delicious meal, a nasty case of
                      'Delhi belly," says Traveler contributing editor Krisanne
                      Fordham in her story on this very topic. In short:
                      Traveling for a living is equal parts rewarding and
                      challenging, satisfying and smelly. It teaches you to
                      live—not linger, but really live—outside your comfort
                      zone, to always pack a portable Wi-Fi hotspot, and to
                      never check your bag again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FAQ End    */}
    </div>
  );
};

export default ContactUs;
