## Gulp-Chug vs Node Require as a method for importing external tasks

#### Edit: Conclusion

The [suggested alternative](https://github.com/gulpjs/plugins/blob/master/src/blackList.json#L100) to gulp-chug does not work for this scenario. A working alternative was suggested [here](https://github.com/gulpjs/gulp/issues/919).


#### Background info 

- gulp-chug is a gulp plugin that's been blacklisted by the gulp team
- when asked why it's been blacklisted, the gulp team suggested that gulp-chug is not needed as the node require provides the needed functionality out of the box https://github.com/gulpjs/plugins/issues/93
- i started investigating this, and I was able to get my needed functionality out of node require, in an isolated project : https://github.com/kosz/research-is-gulp-chug-needed
- all hell broke loose once I actually tried to use this in a real world scenario 

- i have created this project to outline the problem

#### Project setup 

- clone this repo `git clone git@github.com:kosz/research-can-require-replace-gulp-chug.git`
- run `npm install` in it's root directory
- run `npm install` and `bower install` in it's childproject directory 

#### Reproducing problems

##### Working: standard gulp file from it's local directory
- cd to childproject and run `gulp serve`. [**working** local task]
- in the childproject directory run `gulp serve:dist` [**working** local task]

##### Working: gulp-chug tasks, from the master gulp file
- from the root directory run `gulp chug` [**working** gulp chug task, which runs gulp serve in the child project]
- from the root directory run `gulp chug:dist` [**working** gulp-chug task, which runs gulp serve:dist in the child project]

##### Failing: node require suggested approach, from the master gulp file
- from the root directory run `gulp require` [**failing** task, using the gulp suggested approach, which fails at running gulp serve on the child project]
- from the root directory run `gulp require:dist` [**failing** task, using the gulp suggested approach, failing at running gulp serve:dist on the project] 
