// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

// ** Custom Components
import Card from '@components/card-snippet'
import BreadCrumbs from '@components/breadcrumbs'

// ** Demo Components
import PopoverTriggers from './PopoverTriggers'
import PopoverPositions from './PopoverPositions'
import PopoverControlled from './PopoverControlled'
import PopoverUncontrolled from './PopoverUncontrolled'

// ** Third Party Components
import Prism from 'prismjs'

// ** Source Code
import { popoverControlled, popoverUncontrolled, popoverPositions, popoverTriggers } from './PopoverSourceCode'

const Popover = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <Fragment>
      <BreadCrumbs title='Popovers' data={[{ title: 'Components' }, { title: 'Popovers' }]} />
      <Row>
        <Col md='6' sm='12'>
          <Card title='Controlled Popover' code={popoverControlled}>
            <CardText>
              For controlled Popover you'll have to manage state of component. Controlled Popover require{' '}
              <code>isOpen</code> and <code>toggle</code> props to work.
            </CardText>
            <PopoverControlled />
          </Card>
        </Col>
        <Col md='6' sm='12'>
          <Card title='Uncontrolled Popover' code={popoverUncontrolled}>
            <CardText>
              You can create an uncontrolled popover without having to manage state. All you have to do is wrap your
              content inside UncontrolledPopover tag.
            </CardText>
            <PopoverUncontrolled />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <Card title='Popover Positions' code={popoverPositions}>
            <CardText className='mb-0'>
              Use prop <code>placement</code> to place you popover at desired position.
            </CardText>
            <PopoverPositions />
          </Card>
        </Col>
        <Col sm='12'>
          <Card title='Popover Triggers' code={popoverTriggers}>
            <CardText className='mb-0'>
              Use prop <code>trigger</code> for various trigger options. Trigger each popover to see information about
              the trigger.
            </CardText>
            <PopoverTriggers />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}
export default Popover
