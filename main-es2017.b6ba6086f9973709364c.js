            mutation doPasswordReset($email: String!){
              resetPassword(
                input:{
                  email: $email
                }
              ){
                __typename
              }
            }
            `,variables:{email:e}})}resetPassword(e){return this._httpClient.post("api/auth/reset-password",e)}signIn(e){return this._authenticated?(0,a._)("User is already logged in."):this._apollo.mutate({mutation:l.Ps`
              mutation logIn($username: String!, $password: String!) {
                logIn(input: { username: $username, password: $password }) {
                  clientMutationId
                  viewer {
                    user {
                      username
                      email
                    }
                    sessionToken
                  }
                }
              }
            `,variables:e}).pipe((0,o.w)(e=>(this.accessToken=e.data.logIn.viewer.sessionToken,this._authenticated=!0,this._userService.user=e.data.logIn.viewer.user,(0,r.of)(e))))}signInUsingToken(){return this._httpClient.post("api/auth/refresh-access-token",{accessToken:this.accessToken}).pipe((0,u.K)(()=>(0,r.of)(!1)),(0,o.w)(e=>(this._authenticated=!0,(0,r.of)(!0))))}signOut(){return localStorage.removeItem("accessToken"),this._authenticated=!1,(0,s.D)(this.supaBaseService.signout())}signUp(e){return this._httpClient.post("api/auth/sign-up",e)}unlockSession(e){return this._httpClient.post("api/auth/unlock-session",e)}check(){return this._authenticated?(0,r.of)(!0):this.accessToken?this.signInUsingToken():(0,r.of)(!1)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(d.eN),c.LFG(m.K),c.LFG(l._M),c.LFG(h.P))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac}),e})()},37495:function(e,t,i){"use strict";i.d(t,{K:function(){return d}});var n=i(88229),a=i(40205),r=i(93342),s=i(88002),o=i(50752),u=i(37716),l=i(91841),c=i(1400);let d=(()=>{class e{constructor(e,t,i){this._httpClient=e,this._apollo=t,this._fuseConfirmationService=i,this._user=new n.t(1),this.role="NO_ROLE"}set user(e){this.role=null!=(null==e?void 0:e.permission)?e.permission:"NO_ROLE",this._user.next(e)}get user$(){return this._user.asObservable()}get(){return this._httpClient.get("api/common/user").pipe((0,r.b)(e=>{}))}getUserData(){return this._apollo.query({query:o.Ps`
          query GetCurrentUser {
            viewer {
              sessionToken
              user {
                id
                name
                username
                email
                avatar {
                  url
                  name
                }
              }
            }
          }
        `,fetchPolicy:"network-only"}).pipe((0,r.b)(e=>{Object.assign({},e.data.viewer.user).avatar=e.data.viewer.user.avatar.url}))}getUserRole(){return this._apollo.query({query:o.Ps`
          query getUserRole {
            getUserRoleFunction
          }
        `,fetchPolicy:"network-only"}).pipe((0,r.b)(e=>{}))}update(e){return this._httpClient.patch("api/common/user",{user:e}).pipe((0,s.U)(e=>{this._user.next(e)}))}createNewUser(e,t,i,n,a,r){return this._apollo.mutate({mutation:o.Ps`
          mutation createUser(
            $username: String!
            $password: String!
            $email: String!
            $name: String!
            $role: ID!
          ) {
            updateRole(
              input: {
                id: $role
                fields: {
                  users: {
                    createAndAdd: {
                      username: $username
                      password: $password
                      name: $name
                      email: $email
                    }
                  }
                }
              }
            ) {
              role {
                name
              }
            }
          }
        `,variables:{username:t,password:n,email:i,name:e,role:a}}).pipe((0,s.U)(e=>{}))}getAllUsers(){return this._apollo.query({query:o.Ps`
          query getAllUsers {
            users {
              edges {
                node {
                  id
                  name
                  username
                  email
                  avatar {
                    url
                    name
                  }
                  profPic {
                    url
                    name
                  }
                }
              }
            }
          }
        `,fetchPolicy:"network-only"}).pipe((0,r.b)(e=>{}))}getAllUsersByRole(){return this._apollo.query({query:o.Ps`
          query getAllUsersByRole {
            roles {
              edges {
                node {
                  id
                  objectId
                  name
                  users {
                    edges {
                      node {
                        id
                        objectId
                        name
                        username
                        email
                        avatar {
                          url
                          name
                        }
                        profPic {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,fetchPolicy:"network-only"}).pipe((0,r.b)(e=>{}))}deleteUser(e){return this._apollo.mutate({mutation:o.Ps`
          mutation deleteUser($id: ID!) {
            deleteUserFunction(id: $id) {
              users {
                userId
              }
            }
          }
        `,variables:{id:e}}).pipe((0,s.U)(e=>{}))}updateUser(e,t,i,n,a,r,u){return this._apollo.mutate({mutation:o.Ps`
          mutation updateUser(
            $id: ID!
            $name: String!
            $username: String!
            $email: String!
            $roleId: ID!
            $roleChanged: Boolean!
          ) {
            updateUserFunction(
              id: $id

              name: $name
              username: $username
              email: $email
              roleId: $roleId
              roleChanged: $roleChanged
            ) {
              user {
                id
                name
                username
                email
              }
            }
          }