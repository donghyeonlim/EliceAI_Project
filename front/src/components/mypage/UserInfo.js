import { Button, Stack} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'
import * as API from '../../api'


function UserInfo({user, updateUser}){
    const navigate = useNavigate()
    
    function DeleteUser(){
        Swal.fire({
            title: '계정삭제',
            text: '기존의 비밀번호를 적어주세요',
            icon: 'info',
            input: 'password',
            inputPlaceholder: '기존 비밀번호',
            showConfirmButton: true,
            confirmButtonText: '탈퇴',
            showCancelButton: true,
            cancelButtonText: '취소',
            showCloseButton: true,
        }).then(async function(e) {
            const password = {password: e.value}
            if(e.isConfirmed){
                    try{
                        //password 회원탈퇴하기
                        await API.delpw('users/delete', password)
                        navigate('/login');
                        Swal.fire({
                            title: '회원탈퇴 완료',
                            icon: 'success'
                        })
                    }
                    catch(err){
                        Swal.fire({
                            title: '회원탈퇴가 정상적으로 이루어지지 않았습니다. ',
                            icon: 'fail'
                        })
                }
                
            }            
        })
    }
    function editps(){
    Swal.fire({
        title: '비밀번호 변경',
        html: `<input type="text" id="prePassword" class="swal2-input" placeholder="이전 비밀번호">
        <input type="password" id="newPassword" class="swal2-input" placeholder="변경하고 싶은 비밀번호">`,
        confirmButtonText: '변경',
        focusConfirm: false,
        preConfirm: () => {
          const prePassword = Swal.getPopup().querySelector('#prePassword').value
          const newPassword = Swal.getPopup().querySelector('#newPassword').value
          if (!prePassword || !newPassword) {
            Swal.showValidationMessage(`Please enter login and password`)
          }
          return { prePassword: prePassword, newPassword: newPassword }
        }
      }).then(async function(result) {
        const Apassword = {prePassword: result.value.prePassword, newPassword:result.value.newPassword }
        if(result.isConfirmed) {
            try{
                //password 회원탈퇴하기
                await API.put('users/update/password', Apassword)
                Swal.fire({
                    title: '비밀변호 변경 완료',
                    icon: 'success'
                })
            }
            catch(err){
                Swal.fire({
                    title: '비밀번호변경이 정상적으로 이루어지지 않았습니다. ',
                    icon: 'fail'
                })
        }
        }
        Swal.fire(`
        prePassword: ${result.value.prePassword}
        newPassword: ${result.value.newPassword}
        `);
        });
    }
    return (
        <Stack direction="row" spacing={2}>
        <Button onClick={() => editps()} variant="contained" color="success" sx={{
                marginLeft: "90px",
                width: "120px",
                height: "50px",
                fontFamily: 'Jeju Gothic',
                verticalAlign: 'top',
                fontSize: "12px", 
                }}>비밀번호 변경</Button>
        <Button onClick={() => DeleteUser()} variant="contained" color="error" sx={{
                marginLeft: "90px",
                width: "120px",
                fontFamily: 'Jeju Gothic',
                height: "50px",
                verticalAlign: 'top', 
                }}>계정 삭제</Button>
      </Stack>
    )
}

export default UserInfo;
