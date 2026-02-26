/************** 
 * Prac3 *
 **************/


// store info about the experiment session:
let expName = 'prac3';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// Run 'Before Experiment' code from code
import * as random from 'random';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(byeRoutineBegin());
flowScheduler.add(byeRoutineEachFrame());
flowScheduler.add(byeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'pr3_conds.csv', 'path': 'pr3_conds.csv'},
    {'name': 'distr/krosh.png', 'path': 'distr/krosh.png'},
    {'name': 'distr/losyash.png', 'path': 'distr/losyash.png'},
    {'name': 'distr/pin.png', 'path': 'distr/pin.png'},
    {'name': 'distr/kopatych.png', 'path': 'distr/kopatych.png'},
    {'name': 'distr/sovunya.png', 'path': 'distr/sovunya.png'},
    {'name': 'distr/nyusha.png', 'path': 'distr/nyusha.png'},
    {'name': 'distr/ezhik.png', 'path': 'distr/ezhik.png'},
    {'name': 'distr/barash.png', 'path': 'distr/barash.png'},
    {'name': 'distr/karych.png', 'path': 'distr/karych.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var text;
var key_resp_2;
var trialClock;
var fix_cross;
var text_letter1;
var text_letter2;
var text_letter3;
var text_letter4;
var text_letter5;
var text_letter6;
var key_resp;
var left_or_right;
var image_distr;
var byeClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Добрый день!\nВ этом эксперименте вам потребуется определять какая из букв (N или X) присутствует на экране. В течение всего эксперимента старайтесь смотреть только в центр экрана! \nСтарайтесь дать ответ как можно быстрее!\nЕсли предъявлялась буква N, нажмите N \nЕсли предъявлялась буква X, нажмите X \n\nЕсли готовы приступить к эксперименту, нажмите пробел!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_letter1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 1.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_letter2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_letter3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_letter4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_letter5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  text_letter6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_letter6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  left_or_right = {"left": 180, "right": 180};
  
  image_distr = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_distr', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.2, 0.23],
    color : new util.Color([1,1,1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  // Initialize components for Routine "bye"
  byeClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _key_resp_2_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(text);
    instrComponents.push(key_resp_2);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof ['y','n','left','right','space'] === 'string' ? [['y','n','left','right','space']] : ['y','n','left','right','space'], 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'pr3_conds.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trialRoutineEachFrame());
      trials_2LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var _key_resp_allKeys;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    fix_cross.setText('+');
    text_letter1.setPos([0, 0.15]);
    text_letter1.setText(letter1);
    text_letter1.setHeight(0.1);
    text_letter2.setPos([(- 0.125), 0.075]);
    text_letter2.setText(letter2);
    text_letter3.setPos([(- 0.125), (- 0.075)]);
    text_letter3.setText(letter3);
    text_letter4.setPos([0, (- 0.15)]);
    text_letter4.setText(letter4);
    text_letter5.setPos([0.125, (- 0.075)]);
    text_letter5.setText(letter5);
    text_letter6.setPos([0.125, 0.075]);
    text_letter6.setText(letter6);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // Run 'Begin Routine' code from code
    if ((side === "left")) {
        image_distr.pos = [(- 0.31), 0];
    } else {
        if ((side === "right")) {
            image_distr.pos = [0.31, 0];
        } else {
            if ((side === "up")) {
                image_distr.pos = [0, 0.31];
            } else {
                if ((side === "down")) {
                    image_distr.pos = [0, (- 0.31)];
                }
            }
        }
    }
    
    image_distr.setOpacity(distractor_appears);
    image_distr.setImage(distr);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fix_cross);
    trialComponents.push(text_letter1);
    trialComponents.push(text_letter2);
    trialComponents.push(text_letter3);
    trialComponents.push(text_letter4);
    trialComponents.push(text_letter5);
    trialComponents.push(text_letter6);
    trialComponents.push(key_resp);
    trialComponents.push(image_distr);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }
    
    
    // if fix_cross is active this frame...
    if (fix_cross.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fix_cross.tStop = t;  // not accounting for scr refresh
      fix_cross.frameNStop = frameN;  // exact frame index
      // update status
      fix_cross.status = PsychoJS.Status.FINISHED;
      fix_cross.setAutoDraw(false);
    }
    
    
    // *text_letter1* updates
    if (t >= 0.5 && text_letter1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter1.tStart = t;  // (not accounting for frame time here)
      text_letter1.frameNStart = frameN;  // exact frame index
      
      text_letter1.setAutoDraw(true);
    }
    
    
    // if text_letter1 is active this frame...
    if (text_letter1.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter1.tStop = t;  // not accounting for scr refresh
      text_letter1.frameNStop = frameN;  // exact frame index
      // update status
      text_letter1.status = PsychoJS.Status.FINISHED;
      text_letter1.setAutoDraw(false);
    }
    
    
    // *text_letter2* updates
    if (t >= 0.5 && text_letter2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter2.tStart = t;  // (not accounting for frame time here)
      text_letter2.frameNStart = frameN;  // exact frame index
      
      text_letter2.setAutoDraw(true);
    }
    
    
    // if text_letter2 is active this frame...
    if (text_letter2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter2.tStop = t;  // not accounting for scr refresh
      text_letter2.frameNStop = frameN;  // exact frame index
      // update status
      text_letter2.status = PsychoJS.Status.FINISHED;
      text_letter2.setAutoDraw(false);
    }
    
    
    // *text_letter3* updates
    if (t >= 0.5 && text_letter3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter3.tStart = t;  // (not accounting for frame time here)
      text_letter3.frameNStart = frameN;  // exact frame index
      
      text_letter3.setAutoDraw(true);
    }
    
    
    // if text_letter3 is active this frame...
    if (text_letter3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter3.tStop = t;  // not accounting for scr refresh
      text_letter3.frameNStop = frameN;  // exact frame index
      // update status
      text_letter3.status = PsychoJS.Status.FINISHED;
      text_letter3.setAutoDraw(false);
    }
    
    
    // *text_letter4* updates
    if (t >= 0.5 && text_letter4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter4.tStart = t;  // (not accounting for frame time here)
      text_letter4.frameNStart = frameN;  // exact frame index
      
      text_letter4.setAutoDraw(true);
    }
    
    
    // if text_letter4 is active this frame...
    if (text_letter4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter4.tStop = t;  // not accounting for scr refresh
      text_letter4.frameNStop = frameN;  // exact frame index
      // update status
      text_letter4.status = PsychoJS.Status.FINISHED;
      text_letter4.setAutoDraw(false);
    }
    
    
    // *text_letter5* updates
    if (t >= 0.5 && text_letter5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter5.tStart = t;  // (not accounting for frame time here)
      text_letter5.frameNStart = frameN;  // exact frame index
      
      text_letter5.setAutoDraw(true);
    }
    
    
    // if text_letter5 is active this frame...
    if (text_letter5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter5.tStop = t;  // not accounting for scr refresh
      text_letter5.frameNStop = frameN;  // exact frame index
      // update status
      text_letter5.status = PsychoJS.Status.FINISHED;
      text_letter5.setAutoDraw(false);
    }
    
    
    // *text_letter6* updates
    if (t >= 0.5 && text_letter6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_letter6.tStart = t;  // (not accounting for frame time here)
      text_letter6.frameNStart = frameN;  // exact frame index
      
      text_letter6.setAutoDraw(true);
    }
    
    
    // if text_letter6 is active this frame...
    if (text_letter6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_letter6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_letter6.tStop = t;  // not accounting for scr refresh
      text_letter6.frameNStop = frameN;  // exact frame index
      // update status
      text_letter6.status = PsychoJS.Status.FINISHED;
      text_letter6.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof ['x','n','X','N','space'] === 'string' ? [['x','n','X','N','space']] : ['x','n','X','N','space'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_distr* updates
    if (t >= 0.5 && image_distr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_distr.tStart = t;  // (not accounting for frame time here)
      image_distr.frameNStart = frameN;  // exact frame index
      
      image_distr.setAutoDraw(true);
    }
    
    
    // if image_distr is active this frame...
    if (image_distr.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_distr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_distr.tStop = t;  // not accounting for scr refresh
      image_distr.frameNStop = frameN;  // exact frame index
      // update status
      image_distr.status = PsychoJS.Status.FINISHED;
      image_distr.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var byeMaxDurationReached;
var byeMaxDuration;
var byeComponents;
function byeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    byeClock.reset();
    routineTimer.reset();
    byeMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('bye.started', globalClock.getTime());
    byeMaxDuration = null
    // keep track of which components have finished
    byeComponents = [];
    
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function byeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'bye' ---
    // get current time
    t = byeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    byeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function byeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'bye' ---
    byeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('bye.stopped', globalClock.getTime());
    // the Routine "bye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
