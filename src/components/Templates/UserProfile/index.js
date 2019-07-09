import React, { Component } from 'react'
import './style.css'
import Text from '../../Atoms/Text'
import Button from '../../Atoms/Button'

export class UserProfile extends Component {

  changeCurrentRoleTo(role) {
    this.props.functions.changeCurrentRole(role)
  }

  render() {

    const { user, showContact } = this.props

    return (
      <div className={'userProfile container'}>
        <div className="userImage">
          <img src={user.avatarUrl} alt={user.displayName} />
        </div>
        <Text className={"userName"} component="div" varient="h3" >{user.displayName}</Text>
        <Text className={"userEmail"} component="div" varient="body2" >{user.email}</Text>
        <Text className={"userPhoneNumber"} component="div" varient="body2" >{user.phoneNumber}</Text>

        {
          showContact ?
            <div className="contact_user">
              <a href={'tel:' + user.phoneNumber}>
                <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'} onClick={() => console.log('Calling')}>
                  Call
            </Button>
              </a>
              <a href={"mailto:" + user.email}>
                <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'} onClick={() => console.log('Emailing')}>
                  Email
            </Button>
              </a>

              <a href={"sms:" + user.phoneNumber}>
                <Button varient={'OUTLINE'} className={'contact_btn'} name={'primary'} onClick={() => console.log('SMS')}>
                  SMS
            </Button>
              </a>
            </div> : ""
        }


        {
          Object.keys(user.roles).length > 1 &&

          <div className="roles">

            <Text className={""} component="div" varient="body2semibold" >Roles</Text>

            {user.roles.admin === true &&
              <div className={'role_chip ' + (user.roles.currentRole === "admin" && "selected")} onClick={() => { this.changeCurrentRoleTo('admin') }}>
                <Text className={"userPhoneNumber "} component="div" varient="caption" >{'Admin'}</Text>
              </div>
            }
            {user.roles.manager === true &&
              <div className={'role_chip ' + (user.roles.currentRole === "manager" && "selected")} onClick={() => { this.changeCurrentRoleTo('manager') }}>
                <Text className={"userPhoneNumber"} component="div" varient="caption" >{'Manager'}</Text>
              </div>
            }
            {user.roles.deliveryBoy === true &&
              <div className={'role_chip ' + (user.roles.currentRole === "deliveryBoy" && "selected")} onClick={() => { this.changeCurrentRoleTo('deliveryBoy') }}>
                <Text className={"userPhoneNumber"} component="div" varient="caption" >{'Delivery Boy'}</Text>
              </div>
            }
            {/* {user.roles.admin === true && "Admin"} */}
          </div>
        }
        {
          Object.keys(user.roles).length > 2 &&
          <div className="helpers">
            <div className="roleChip">
              <Text className={""} component="div" varient="caption" >{'Disabled'}</Text>
            </div>
            <div className="roleChip selected">
              <Text className={""} component="div" varient="caption" >{'Active'}</Text>
            </div>
            <Text className={"note"} component="div" varient="caption" ><b>NOTE</b> |<br /> Click to switch role </Text>
          </div>
        }
      </div>
    )
  }
}

UserProfile.defaultProps = {
  showContact: true
};

export default UserProfile
