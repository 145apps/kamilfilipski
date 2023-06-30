$(function() {

    $('._myapps ._myapps .application .introduction .background--F2F8FE').addClass('oncross--rose')

    $('._myapps sign incomplete').addClass('oncross--rose')
    
    $('._myapps ._myapps .application .introduction .background--F2F8FE').click(function() {

        $('._myapps nonce').removeClass('pointer-events--none opacity--0').addClass('opacity--6')
        $('._myapps sign').removeClass('pointer-events--none opacity--0')

        $('._myapps sign form[name=authorization] [name=email_address]').focus()

    })

    $('._myapps .background--03A0F3 .conclusion .text-color--007EE7').addClass('oncross--rose')
    
    $('._myapps .background--03A0F3 .conclusion .text-color--007EE7').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')
        
        $('._myapps nonce').removeClass('pointer-events--none opacity--0').addClass('opacity--6')

        $('._myapps sign').removeClass('pointer-events--none opacity--0')

        $('._myapps sign form[name=authorization] [name=email_address]').focus()

    })
    
    $('._myapps sign incomplete').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('opacity--6').addClass('pointer-events--none opacity--0')

        $('._myapps sign').addClass('pointer-events--none opacity--0')
    })

    $('._myapps ._myapps .application .conclusion .background--007EE7').addClass('oncross--rose')

    $('._myapps ._myapps .application .conclusion .grid-template-columns--4FR .border--EBEBEB').addClass('oncross--rose')
       
    $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=name]').keyup(function() {
        $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=name]').removeClass('border-color--F81000')
    })

    $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=email_address]').keyup(function() {
        $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=email_address]').removeClass('border-color--F81000')
    })

    $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=password]').keyup(function() {
        $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=password]').removeClass('border-color--F81000')
    })

    $('._myapps ._myapps .application .conclusion form[name=authorization]').submit(function(submitted) {

        submitted.preventDefault()

        $.ajax({
            url: '/api/authorization',
            method: 'POST',
            data: {
                name: $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=name]').prop('value'),
                email_address: $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=email_address]').prop('value'),
                password: $('._myapps ._myapps .application .conclusion form[name=authorization] input[name=password]').prop('value')
            },
            success: function(message) {

                switch (message) {

                    case 'Full name is required, try again': {

                        $('._myapps ._myapps .application .conclusion form[name=authorization] [name=name]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'Email address is required, try again': {

                        $('._myapps ._myapps .application .conclusion form[name=authorization] [name=email_address]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'Email address has already been used, try again': {

                        $('._myapps ._myapps .application .conclusion form[name=authorization] [name=email_address]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'Password is required, try again': {

                        $('._myapps ._myapps .application .conclusion form[name=authorization] [name=password]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'User has been listed, congratulations': {

                        alert('Wszystko się udało')

                            break

                    }
                }
            }
        })
    })
    
    $('._myapps ._myapps .application .conclusion form[name=sign-in] input[name=email_address]').keyup(function() {
        $('._myapps ._myapps .application .conclusion form[name=sign-in] input[name=email_address]').removeClass('border-color--F81000')
    })

    $('._myapps ._myapps .application .conclusion form[name=sign-in] input[name=password]').keyup(function() {
        $('._myapps ._myapps .application .conclusion form[name=sign-in] input[name=password]').removeClass('border-color--F81000')
    })
     
    $('._myapps sign form[name=sign-in]').submit(function(submitted) {

        submitted.preventDefault()

        $.ajax({
            url: '/api/sign-in',
            method: 'POST',
            data: {
                email_address: $('._myapps sign form[name=sign-in] input[name=email_address]').prop('value'),
                password: $('._myapps sign form[name=sign-in] input[name=password]').prop('value')
            },
            success: function(message) {

                console.log(message)

                switch (message) {

                    case 'Email address is required, try again': {

                        $('._myapps sign form[name=sign-in] [name=email_address]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'Password is required, try again': {

                        $('._myapps sign form[name=sign-in] [name=password]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                    case 'Failed to sign in, try again': {

                        $('._myapps sign form[name=sign-in] [name=password]').attr('placeholder', message).addClass('placeholder-color border-color--F81000')

                            break

                    }
                }
            }
        })
    })

    $('._myapps ._challenges open-challenge').addClass('oncross--rose')

    $('._myapps challenge incomplete').addClass('oncross--rose')

    $(document).on('click', '._myapps ._challenges open-challenge', function() {

        const challange = $(this).data('challange')

        const picture = $(this).data('picture')

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('pointer-events--none opacity--0').addClass('opacity--6')

        $('._myapps challenge .text-size--22').text(challange)

        $('._myapps challenge .introduction .border-top-right--0').attr('src', picture)

        $('._myapps challenge').removeClass('pointer-events--none opacity--0')

        $('._myapps challenge form[name=authorization] [name=email_address]').focus()

    })

    $('._myapps challenge incomplete').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('opacity--6').addClass('pointer-events--none opacity--0')

        $('._myapps challenge').addClass('pointer-events--none opacity--0')

    })

    $('._myapps [data-create]').addClass('oncross--rose')

    $('._myapps create-challenge incomplete').addClass('oncross--rose')

    $('._myapps [data-create]').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('pointer-events--none opacity--0').addClass('opacity--6')

        $('._myapps create-challenge').removeClass('pointer-events--none opacity--0')

        $('._myapps create-challenge form[name=authorization] [name=email_address]').focus()

    })

    $('._myapps create-challenge incomplete').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('opacity--6').addClass('pointer-events--none opacity--0')

        $('._myapps create-challenge').addClass('pointer-events--none opacity--0')

    })

    $('._myapps [data-sort]').addClass('oncross--rose')

    $('._myapps [data-sort]').addClass('transition--200ms')
    
    $('._myapps [data-sort]').click(function() {

        const sort = $(this).data('sort')

        $('._myapps [data-sort]').removeClass('opacity--10').addClass('opacity--4')

        $(this).addClass('opacity--10')

        $.ajax({
            url: '/api/sort',
            method: 'POST',
            data: {
                sort: sort
            },
            success: function(message) {
                
                if (sort == 'completed') {

                    $('._myapps .challenges .conclusion .grid-template-columns--3FR').empty()

                    $.each(message.challenges, function(_, value) {

                        const cards = `
                            <div>
                                <div class="padding-top--20 padding-right--20 padding-bottom--20 padding-left--20 border--EBEBEB border-radius--10">
                                    <div>
                                        <div class="view--grid">
                                            <div>
                                                <div class="posture--relative">
                                                    <div>
                                                        <img width="100%" height="200" class="object--cover border-radius--10" src="` + value.picture + `" alt="Community - ` + value.name + `">
                                                    </div>
                                                    <div>
                                                        <div class="posture--absolute top--10 left--10 padding-top--5 padding-right--10 padding-bottom--5 padding-left--10 background--00000063 border-radius--10">
                                                            <div>
                                                                <div class="text-size--12 text-weight--500 text-color--FFFFFF oncross--rose" data-watch="` + value.watch + `">Watch execution</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="margin-top--20">
                                                <div>
                                                    <p class="text-size--18 text-weight--500">` + value.name + `</p>
                                                </div>
                                            </div>
                                            <div class="margin-top--10">
                                                <div>
                                                    <p class="text-size--14 text-line-height--165">` + value.describe + `</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `

                        $('._myapps .challenges .conclusion .grid-template-columns--3FR').append(cards)
    
                    })

                } else {

                    $('._myapps .challenges .conclusion .grid-template-columns--3FR').empty()

                    $.each(message.challenges, function(_, value) {

                        const cards = `
                            <div>
                                <div class="padding-top--20 padding-right--20 padding-bottom--20 padding-left--20 border--EBEBEB border-radius--10">
                                    <div>
                                        <div class="view--grid">
                                            <div>
                                                <div class="posture--relative">
                                                    <div>
                                                    <img width="100%" height="200" class="object--cover border-radius--10" src="` + value.picture + `" alt="Community - ` + value.name + `">
                                                    </div>
                                                    <div>
                                                        <div class="posture--absolute top--10 right--10 padding-top--5 padding-right--10 padding-bottom--5 padding-left--10 background--00000063 border-radius--10">
                                                            <div>
                                                                <div class="text-size--12 text-weight--500 text-color--FFFFFF">£` + value.cash + `</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="margin-top--20">
                                                <div>
                                                    <p class="text-size--18 text-weight--500">` + value.name + `</p>
                                                </div>
                                            </div>
                                            <div class="margin-top--10">
                                                <div>
                                                    <p class="text-size--14 text-line-height--165">` + value.describe + `</p>
                                                </div>
                                            </div>
                                            <div class="margin-top--20">
                                                <div>
                                                    <p class="text-size--14"><open-challenge class="text-color--007EE7 oncross--rose" data-challange="` + value.name + `" data-picture="` + value.picture + `">Complete</open-challenge> the task and earn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `

                        $('._myapps .challenges .conclusion .grid-template-columns--3FR').append(cards)
    
                    })
                }
            }
        })
    })

    $(document).on('click', '._myapps [data-watch]', function() {

        const watch = $(this).data('watch')

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps watch-execution .introduction iframe').attr('src', watch)

        $('._myapps nonce').removeClass('pointer-events--none opacity--0').addClass('opacity--6')

        $('._myapps watch-execution').removeClass('pointer-events--none opacity--0')

    })

    $('._myapps watch-execution incomplete').addClass('oncross--rose')

    $('._myapps watch-execution incomplete').click(function() {

        $('body').toggleClass('overflow--xhidden overflow--hidden')

        $('._myapps nonce').removeClass('opacity--6').addClass('pointer-events--none opacity--0')

        $('._myapps watch-execution').addClass('pointer-events--none opacity--0')

    })
})