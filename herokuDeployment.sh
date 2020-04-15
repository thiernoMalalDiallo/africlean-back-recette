heroku git:remote -a africlean-recette-back    # Lier le code avec l'appli Heroku
git add .                                       # Ajouter les modifications
git commit -am 'HEROKU DEPLOYMENT'              # Commiter les modifications
#heroku config:set NODE_MODULES_CACHE=false
git push heroku africlean-recette-back:master  # Pusher le code de la branche africlean-recette-back vers Heroku
heroku open                                    # Lance l'application