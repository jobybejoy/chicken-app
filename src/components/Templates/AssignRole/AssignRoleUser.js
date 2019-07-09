import React, { Component } from 'react'
import './style.css'
import UserCard from '../UsersList/UserCard'
import RoleChip from './RoleChip'
import Text from '../../Atoms/Text'
import Select from 'react-select';
import Button from '../../Atoms/Button'




export class AssignRoleUser extends Component {

  state = {
    selectedOptions: null,
    allOptions: [
      { value: 'deliveryBoy', label: 'Delivery Boy' },
      { value: 'manager', label: 'Manager' },
      { value: 'admin', label: 'Admin' },
    ],
  }

  getOptions(currentRoles) {
    return this.state.allOptions.filter((option) => currentRoles[option.value] === undefined)
  }


  handleSelect = selectedOptions => {
    this.setState({ selectedOptions });
  };

  render() {

    const { user, functions } = this.props

    if (!user) return "Fetching User Data"

    return (
      <div className="assignRole container">
        <Text className={'pageTitle'} varient='h3' component='div'>Manage Roles</Text>
        <div>
          <UserCard user={user} />
          <div className="rolesContainer">
            {
              user.roles.admin !== undefined &&
              (user.roles.admin ?
                <RoleChip label={'Admin'} selected={true} onClick={() => functions.toggleRole(user.uid, 'admin')} />
                : <RoleChip label={'Admin'} selected={false} onClick={() => functions.toggleRole(user.uid, 'admin')} />
              )
            }
            {
              user.roles.manager !== undefined &&
              (user.roles.manager ?
                <RoleChip label={'Manager'} selected={true} onClick={() => functions.toggleRole(user.uid, 'manager')} />
                : <RoleChip label={'Manager'} selected={false} onClick={() => functions.toggleRole(user.uid, 'manager')} />
              )
            }
            {
              user.roles.deliveryBoy !== undefined &&
              (user.roles.deliveryBoy ?
                <RoleChip label={'Delivery Boy'} selected={true} onClick={() => functions.toggleRole(user.uid, 'deliveryBoy')} />
                : <RoleChip label={'Delivery Boy'} selected={false} onClick={() => functions.toggleRole(user.uid, 'deliveryBoy')} />
              )
            }
            {/* {
              user.roles.user !== undefined &&
              (user.roles.user ?
                <RoleChip label={'User'} selected={true} disabled={true} />
                : <RoleChip label={'User'} selected={false} disabled={true} />
              )
            } */}
          </div>

          {
            Object.keys(user.roles).length > 2 &&
            <div className="helpers">

              <div className="roleChip">
                <Text className={""} component="div" varient="caption" >{'Disabled'}</Text>
              </div>
              <div className="roleChip selected">
                <Text className={""} component="div" varient="caption" >{'Active'}</Text>
              </div>
              <Text className={"note"} component="div" varient="caption" ><b>NOTE</b> |<br /> Click on role to <b>activate</b> or <b>deactivate</b>  a role </Text>
            </div>
          }


          {
            (Object.keys(user.roles).length >= 1 && Object.keys(user.roles).length <= 4) &&
            <div className="newRole container">
              <Text className={"label"} component="div" varient="h5" >Add a user new roles</Text>

              <Select
                value={this.state.selectedOptions}
                onChange={this.handleSelect}
                placeholder="Select roles "
                // isMulti
                name="colors"
                className="basic-multi-select"
                classNamePrefix="select"
                options={this.getOptions(user.roles)}
              />

              <Button className="cta" varient={'PRIMARY'} name={'primary'}
                onClick={() =>
                  functions.addRole(user.uid, this.state.selectedOptions)
                }>
                ADD ROLE
              </Button>
            </div>

          }
        </div>
      </div>
    )
  }
}

export default AssignRoleUser
