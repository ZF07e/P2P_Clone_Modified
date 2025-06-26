import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function PointRoute() {
  return (
    <>
        <Header active_nav={"Stations"} />
        <section>
          <div>
            <button>{`< ${'{Terminal Name}'}`}</button>
          </div>
        </section>

        <section>
            <div>
              <h4>From</h4>
              <div>
                <h5>{'{Terminal 1}'}</h5>
              </div>
            </div>

            <button>Switch</button>

            <div>
              <h4>To:</h4>
              <div>
                <h5>{'{Terminal 2}'}</h5>
              </div>
            </div>
        </section>

        <hr />

        <section>
          <div>
            <div>
              <h5>Departure</h5>
            </div>
            <div>
              <p>{'{Schedule}'}</p>
              <p>{'{Time - Time}'}</p>
            </div>
          </div>
        </section>

        <section>
          {/* Time List */}
        </section>
    </>
  )
}

export default PointRoute